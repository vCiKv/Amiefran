import { useState } from "react"
export const PopUp=(props)=>{    
    const open = props.open
    const close = props.close
    const modal = (<div className={open ?"modal is-active":"modal"}>
    <div onClick={close} className="modal-background"></div>
    <div className="modal-content">
        <div className="card p-5">
            {props.children}
        </div>         
    </div>
    <button onClick={close}className="modal-close is-large" aria-label="close"></button>
</div>)
    return (<div>{open && modal }</div>)
}
export const ConfirmationPopUp = (props)=>{
    const [showMessage,setShowMessage] = useState(false)
    const enter = props.enter
    const exit = props.exit
    const title = props.title
    let msgText = ''
    const yes=()=>{
        const check = enter()     
        if(!check.error){
            //enter()
            msgText = check.msg
            setShowMessage(true)
            setTimeout(()=>{
                setShowMessage(false)
                exit()
            },4000)
        }
    }
    const text = (
        <div className="box">
            <p className="is-size-3 my-4 is-capitalized">are you sure you want to delete <i>{title}</i>?</p>
            <div className="field is-grouped is-centered is-capitalized">
                <button className="mx-2 button is-danger"onClick={yes}>Yes</button>
                <button className="mx-2 button" onClick={exit}>Close</button>
            </div>
        </div>
    )
    const msg = (
        <div className="box">
            <p className="is-size-3 my-4 is-capitalized">{msgText}</p>
        </div>
    )
    return <PopUp open={props.open} close={exit}>{showMessage?msg:text}</PopUp>    
}
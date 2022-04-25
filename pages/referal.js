import {useState} from 'react'
export default function referer(){
    const [input,setInput] = useState({codeA:'',codeB:''})
    const data={
        code:{
            id:'ssadwadsdqwad',
            email:'sdadwaedwade@mail.com',
            username:'user1212',
            referred:{
                confirmed:['code1','code2','code4'],
                overflow:['code9','code16'],
                pending:['code3','code5']
            },
            //referred:['code1','code2','code4'],
       
        },
        code2:{
            id:'ssadwavanivpead',
            email:'sdadxvowafsse@mail.com',
            username:'user999',
            referred:{
                confirmed:['code1','code2','code4'],
                pending:['code3','code5']
            },
            //referred:['code1','code2','code4'],
            overflow:['code9','code16'],
        },
        code9:{
            id:'svzvnipeeddadae',
            email:'sdadvzvnlsvefoafwa@mail.com',
            username:'user42069',
            referred:{
                confirmed:['code1','code2','code4'],
                pending:['code3']
            },
            overflow:[],
        }
    }

    const moveToReferred = (refCode,movedCode)=>{
        const codeList = Object.keys(data)
        if(refCode === '' || !codeList.includes(refCode)){
            console.log('does not exist')
            return null
        }
        const referredData = data[refCode].referred
        if(referredData.pending.includes(movedCode)){
            
            const newPendingArr = {confirmed:referredData.confirmed.push(movedCode),pending:referredData.pending.filter(item => item !== movedCode)}
            console.log(newPendingArr)
            console.log(referredData.confirmed)

            const newData = {...data,[refCode]:{...data[refCode],referred:newPendingArr}}
            console.log(newData)        
        }else{
            console.log('does not exist')
        }
    }
    const handleInput=(e,type)=>{
        if (type === 'A'){
            setInput({...input,codeA:e.target.value})
        }else{
            setInput({...input,codeB:e.target.value})
        }
    }
    return (
        <>
        <div>
            {JSON.stringify(data)}
        </div>
        <form onSubmit={(e)=>{e.preventDefault();moveToReferred(input.codeA,input.codeB)}}>
            <input type="text" value={input.codeA || ''}onChange={(e)=>handleInput(e,'A')} placeholder="codeA"/>
            <input type="text" value={input.codeB || ''}onChange={(e)=>handleInput(e,'b')} placeholder="codeB"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
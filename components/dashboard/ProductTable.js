import React,{useState,useEffect} from 'react';
import { UpdateProduct,deleteProduct } from './tableFunctions';
import { PopUp,ConfirmationPopUp } from './PopUp';
import Firebase from '../Firebase'
import { getFirestore,collection, getDocs,onSnapshot  } from "firebase/firestore";


const WorkTable=()=>{
    const defaultPopUp = {
        fullText:false,
        delete:false,
        update:false,
    }
    const defaultTableFunction = {
        id:null,
        type:-1,
        title:''
    }
    const [tableData, setTableData] = useState([])
    const [popUpContent, setPopUpContent] = useState(defaultPopUp)
    const [tableSubFunction, setTableSubFunction] = useState(defaultTableFunction) 
    const runPopUp = (id=false,type=-1,title='')=>{
        if(id){
            if(type !== 'fullText'){
                setTableSubFunction({...tableSubFunction,id:id,type:type,title:title})       
                setPopUpContent({ ...popUpContent,[type]:true})
            }else{
                setPopUpContent({ ...popUpContent,[type]:id})
            }
        }else{
            setPopUpContent(defaultPopUp)
            setTableSubFunction(defaultTableFunction)
        }        
    }
    useEffect(()=>{
        async function getProductData(){
      
            const db = getFirestore(Firebase)
            const unsubscribe = onSnapshot(collection(db,'catalog'), (qSnapShot) => {
                const tempData = []
                qSnapShot.forEach(doc=>{
                    tempData.push({id:doc.id, ...doc.data()})
                })
                setTableData(tempData)
                unsubscribe()
            });      
        }
        getProductData(); 
    },[])    
    const DBTableProduct=()=>{
        const tableStyle = {
            link:{maxWidth:250,overflow:"hidden"},
            fullText:{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth:250}
        }   
        const TimeToDate=(c)=>{
            return new Date(c*1000).toLocaleString()
        }
        const TableContainer = (props)=>{
            return(
            <div className="table-container">
                <table className="table p-4 is-striped is-hoverable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Code</th>
                            <th>Image Url</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            {/* <th>Last Updated</th>
                            <th>Created</th>  */}
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>   
                </table>  
            </div> 
            )
        }
        return(
            <TableContainer>
                {tableData.map(arr=>(      
                    <tr key={arr.id}>
                        <th>{arr.id}</th>
                        <th>{arr.title}</th>
                        <th>{arr.code}</th>
                        <th style={tableStyle.link}>{arr.image_url}</th>
                        <th style={tableStyle.description}>
                            <span 
                                onClick={()=>runPopUp(arr.description,'fullText')} 
                                className="icon-text">
                                <span className="icon">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </span>
                                <span>{arr.description}</span>
                            </span>
                        </th>
                        <th>
                            <span className="icon" onClick={()=>runPopUp(arr,'update')}>
                                <ion-icon name="create-outline"></ion-icon>
                            </span>
                        </th>
                        <th>
                            <span className="icon" onClick={()=>runPopUp(arr.id,'delete',arr.title)}>
                                <ion-icon name="trash-outline"></ion-icon>
                            </span>
                        </th>
                        {/* <th>{TimeToDate(arr.date_edited.seconds)}</th>
                        <th>{TimeToDate(arr.date_created.seconds)}</th> */}
                    </tr>           
                ))} 
            </TableContainer>
        )
    }   
    return(
        <>
        <DBTableProduct/>
        <ConfirmationPopUp open={popUpContent.delete} enter={()=>deleteProduct(tableSubFunction.id)} exit={()=>runPopUp()} title={tableSubFunction.title}/> 
        <PopUp open={popUpContent.update} close={()=>runPopUp()}><UpdateProduct data={tableSubFunction.id} id={tableSubFunction.id}/></PopUp> 
        <PopUp open={popUpContent.fullText} close={()=>runPopUp()} >{popUpContent.fullText}</PopUp>
        </>
    )  
}
export default WorkTable
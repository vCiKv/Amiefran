import React,{useState,useEffect} from 'react';
import { UpdateWork,deleteWork } from './tableFunctions';
import Firebase from '../Firebase'
import { getFirestore,collection, getDocs,onSnapshot  } from "firebase/firestore";
import { PopUp,ConfirmationPopUp } from './PopUp';
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
        function getWorkData(){
            const db = getFirestore(Firebase)
            const unsubscribe = onSnapshot(collection(db,'Amiefran-works'), (qSnapShot) => {
                const tempData = []

                qSnapShot.forEach(doc=>{
                    tempData.push({id:doc.id, ...doc.data()})
                })
                setTableData(tempData)
                unsubscribe()

            });
            // const workList = await getDocs(collection(db,'Amiefran-works'))  
            // workList.docs.forEach(doc => {
            //     tempData.push({id:doc.id, ...doc.data()})
            // });
            // setTableData(tempData)
        }
        getWorkData(); 
    },[])    
    const DBTableWork=()=>{
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
                            <th>Image Url</th>
                            <th>Short text</th>
                            <th>Long Text</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Last Updated</th>
                            <th>Created</th> 
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
                        <th style={tableStyle.link}>{arr.image_url}</th>
                        <th>{arr.short_text}</th>
                        <th style={tableStyle.fullText}>
                            <span 
                                onClick={()=>runPopUp(arr.full_text,'fullText')} 
                                className="icon-text">
                                <span className="icon">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </span>
                                <span>{arr.full_text}</span>
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
                        <th>{TimeToDate(arr.date_edited.seconds)}</th>
                        <th>{TimeToDate(arr.date_created.seconds)}</th>
                    </tr>           
                ))} 
            </TableContainer>
        )
    }   
    return(
        <>
        <DBTableWork/>
        <ConfirmationPopUp open={popUpContent.delete} enter={()=>deleteWork(tableSubFunction.id)} exit={()=>runPopUp()} title={tableSubFunction.title}/> 
        <PopUp open={popUpContent.update} close={()=>runPopUp()}><UpdateWork data={tableSubFunction.id} id={tableSubFunction.id}/></PopUp> 
        <PopUp open={popUpContent.fullText} close={()=>runPopUp()} >{popUpContent.fullText}</PopUp>
        </>
    )  
}
export default WorkTable
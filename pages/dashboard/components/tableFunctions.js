import React,{useState} from 'react';
import { getFirestore, doc,collection,addDoc, deleteDoc,updateDoc} from "firebase/firestore"
import Firebase from '../../api/Firebase'

const db = getFirestore(Firebase)
const InputField =(props)=>{
    return (
        <div className="field">
            <label className="label">{props.label ? props.label : props.placeholder}</label>
            <div className="control">
                <input  
                    className="input" type="text" 
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value||""}
                />
            </div>
        </div>
    )
}
const TextareaField =(props)=>{
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <textarea  
                    className="textarea" type="text" 
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value||""}
                ></textarea>
            </div>
        </div>
    )
}
const defaultUpdateOutcome = {
    result:null,
    disabled:false
}
const defaultWorkData = {
    title: '',
    image_url:'',
    short_text:'',
    full_text:'',
}
const defaultProductData = {
    title: '',
    image_url:'',
    description:'',
    code:'',
}
const Button = (props)=>{
    const disabled = props.disabled
    const buttonText = props.buttonText
    return (
        <div className="field">
            <div className="control">
                <button disabled={disabled} className={"button is-link "+(disabled ? 'is-loading':'')}>{buttonText}</button>
            </div>
        </div> 
    )
}
export const AddWork =()=>{  
    const [updateOutcome, setUpdateOutcome] = useState(defaultUpdateOutcome)
    const [WorkData, setWorkData] = useState(defaultProductData)

    const submitHandler=async (event)=>{
        event.preventDefault()
        setUpdateOutcome({...updateOutcome,disabled:true})
        const myDate = new Date()
        const fullData = {date_created:myDate,date_edited:myDate,...WorkData}
        try{
            //const AmiWorksDB = await addDoc(collection(db,'Amiefran-works'),fullData)
            await addDoc(collection(db,'Amiefran-works'),fullData)
            setWorkData(defaultWorkData)
            alert('data has been sent')  
            setUpdateOutcome({result:'success',disabled:false})
        }catch(e){
            setUpdateOutcome({result:'error',disabled:false})
            alert('data was not sent');
            console.log(e)
        }
    }
    const message = {
        class:'is-size-3 has-text-centered is-capitalized',
        error:{
            text:'an error occurred creating try again',
            class:'has-text-danger',
        },
        success:{
            text:'created successfully',
            class:'has-text-success'
        }
    }
    return(
        <form onSubmit={submitHandler} >
            <InputField label="title" placeholder="title" value={WorkData.title} onChange={(e)=>setWorkData({...WorkData,title:e.target.value})}/>
            <InputField label="Image Link" placeholder="http://example/1234/56.png" value={WorkData.image_url} onChange={(e)=>setWorkData({...WorkData,image_url:e.target.value})}/>
            <InputField label="Short Text" placeholder="Short Text" value={WorkData.short_text} onChange={(e)=>setWorkData({...WorkData,short_text:e.target.value})}/>
            <TextareaField label="Full Text" placeholder="Full Text" value={WorkData.full_text} onChange={(e)=>setWorkData({...WorkData,full_text:e.target.value})}/>
            <Button buttonText="Create" disabled={updateOutcome.disabled} />
            {updateOutcome.result && <p className={`${message.class} ${message[updateOutcome.result].class}`}>{ message[updateOutcome.result].text}</p>}                 
        </form>
    )
}
export const deleteWork = async(id)=>{
    try{
        await deleteDoc(doc(db, 'Amiefran-works',id))
        alert('data has been Deleted')  
        return {error:false,msg:'successful'}    
    }catch(e){
        console.log(e)
        return {error:true, msg:e}
    }
}
export const UpdateWork =(props)=>{
    //change the button according to results 
    //disable button when running 
    const data = props.data
    const [WorkData, setWorkData] = useState(props.data)
    const [updateOutcome, setUpdateOutcome] = useState(defaultUpdateOutcome)
    const submitHandler=async(event)=>{
        //setDisabled(true)
        event.preventDefault()
        setUpdateOutcome({...updateOutcome,disabled:true})
        const updateWorksDB = doc(db,'Amiefran-works',data.id);    
        const currentDate = new Date()
        const fullData = {...WorkData,date_edited:currentDate}
        try{
            await updateDoc(updateWorksDB,fullData,{merge:true})    
            setUpdateOutcome({result:'success',disabled:false})
        }catch(e){    
            setUpdateOutcome({result:'error',disabled:false})
        }        
    }
    const message = {
        class:'is-size-3 has-text-centered is-capitalized',
        error:{
            text:'an error occurred writing to database',
            class:'has-text-danger',
        },
        success:{
            text:'update is successful',
            class:'has-text-success'
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <InputField label="title" placeholder="title" value={WorkData.title} onChange={(e)=>setWorkData({...WorkData,title:e.target.value})}/>
            <InputField label="Image Link" placeholder="http://example/1234/56.png" value={WorkData.image_url} onChange={(e)=>setWorkData({...WorkData,image_url:e.target.value})}/>
            <InputField label="Short Text" placeholder="Short Text" value={WorkData.short_text} onChange={(e)=>setWorkData({...WorkData,short_text:e.target.value})}/>
            <TextareaField label="Full Text" placeholder="Full Text" value={WorkData.full_text} onChange={(e)=>setWorkData({...WorkData,full_text:e.target.value})}/>
            <Button buttonText="Update" disabled={updateOutcome.disabled}/>
            {updateOutcome.result && <p className={`${message.class} ${message[updateOutcome.result].class}`}>{ message[updateOutcome.result].text}</p>}                 
        </form>
    )
}
export const AddProduct=()=>{  
    const [updateOutcome, setUpdateOutcome] = useState(defaultUpdateOutcome)
    const [productData, setProductData] = useState(defaultWorkData)

    const submitHandler=async (event)=>{
        event.preventDefault()
        setUpdateOutcome({...updateOutcome,disabled:true})
        const myDate = new Date()
        const fullData = {date_created:myDate,date_edited:myDate,...productData}
        try{
            //const AmiWorksDB = await addDoc(collection(db,'Amiefran-works'),fullData)
            await addDoc(collection(db,'catalog'),fullData)
            setProductData(defaultWorkData)
            alert('data has been sent')  
            setUpdateOutcome({result:'success',disabled:false})
        }catch(e){
            setUpdateOutcome({result:'error',disabled:false})
            alert('data was not sent');
            console.log(e)
        }
    }
    const message = {
        class:'is-size-3 has-text-centered is-capitalized',
        error:{
            text:'an error occurred creating try again',
            class:'has-text-danger',
        },
        success:{
            text:'created successfully',
            class:'has-text-success'
        }
    }
    return(
        <form onSubmit={submitHandler} >
            <InputField label="title" placeholder="title" value={productData.title} onChange={(e)=>setProductData({...productData,title:e.target.value})}/>
            <InputField label="Image Link" placeholder="http://example/1234/56.png" value={productData.image_url} onChange={(e)=>setProductData({...productData,image_url:e.target.value})}/>
            <InputField label="Short Text" placeholder="product code" value={productData.code} onChange={(e)=>setProductData({...productData,code:e.target.value})}/>
            <TextareaField label="Full Text" placeholder="product description" value={productData.description} onChange={(e)=>setProductData({...productData,description:e.target.value})}/>
            <Button buttonText="Create" disabled={updateOutcome.disabled} />
            {updateOutcome.result && <p className={`${message.class} ${message[updateOutcome.result].class}`}>{ message[updateOutcome.result].text}</p>}                 
        </form>
    )
}
export const UpdateProduct =(props)=>{
    //change the button according to results 
    //disable button when running 
    const data = props.data
    const [productData, setProductData] = useState(props.data)
    const [updateOutcome, setUpdateOutcome] = useState(defaultUpdateOutcome)
    const submitHandler=async(event)=>{
        //setDisabled(true)
        event.preventDefault()
        setUpdateOutcome({...updateOutcome,disabled:true})
        const updateWorksDB = doc(db,'catalog',data.id);    
        const currentDate = new Date()
        const fullData = {...productData,date_edited:currentDate}
        try{
            await updateDoc(updateWorksDB,fullData,{merge:true})    
            setUpdateOutcome({result:'success',disabled:false})
        }catch(e){    
            setUpdateOutcome({result:'error',disabled:false})
        }        
    }
    const message = {
        class:'is-size-3 has-text-centered is-capitalized',
        error:{
            text:'an error occurred writing to database',
            class:'has-text-danger',
        },
        success:{
            text:'update is successful',
            class:'has-text-success'
        }
    }
    return(
        <form onSubmit={submitHandler} >
            <InputField placeholder="title" value={productData.title} onChange={(e)=>setProductData({...productData,title:e.target.value})}/>
            <InputField label="Image Link" placeholder="http://example/1234/56.png" value={productData.image_url} onChange={(e)=>setProductData({...productData,image_url:e.target.value})}/>
            <InputField placeholder="product code" value={productData.code} onChange={(e)=>setProductData({...productData,code:e.target.value})}/>
            <TextareaField label="product description" placeholder="product description" value={productData.description} onChange={(e)=>setProductData({...productData,description:e.target.value})}/>
            <Button buttonText="Update" disabled={updateOutcome.disabled} />
            {updateOutcome.result && <p className={`${message.class} ${message[updateOutcome.result].class}`}>{ message[updateOutcome.result].text}</p>}                 
        </form>
    )
}
export const deleteProduct = async(id)=>{
    try{
        await deleteDoc(doc(db, 'catalog',id))
        alert('data has been Deleted')  
        return {error:false,msg:'successful'}    
    }catch(e){
        console.log(e)
        return {error:true, msg:e}
    }
}

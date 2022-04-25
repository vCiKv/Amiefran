import React,{useState} from 'react';
import Axios from 'axios' 
import firebase from '../Firebase'
//const cloudinary = require('cloudinary').v2

const UploadImage =()=>{

    const [ImageFile, setImageFile] = useState('')
    const [ImageLink, setImageLink] = useState('')

    const SendImageLinkToDB=(url)=>{
        const unsubscribe = firebase.firestore().collection('Image_Links')
        unsubscribe.add({image_url:url})
        .then(
            alert('data has been sent')
        )
        return() => unsubscribe
    }

    const UploadCurrentImage =()=>{
        const fromData = new FormData()
        fromData.append('file',ImageFile)
        fromData.append('upload_preset','mzfxbtux')
        Axios
            .post("https://api.cloudinary.com/v1_1/amiefran/image/upload",fromData)
            .then((response)=>{
                if (response.status === 200){
                    setImageLink(response.data.secure_url)           
                }
            })
        SendImageLinkToDB(ImageLink)
    }

    return (
        <div className="box p-4">
            <div className="field">
                <div className="control">
                    <input className="input" type="file" onChange={(e)=>{setImageFile(e.target.files[0])}}/>  
                </div>
            </div>
            
            <div className="field">
                <div className="control">
                    <button onClick={UploadCurrentImage} className="button is-link">Upload File</button>
                </div>
            </div> 
        </div>
    )
}


export default UploadImage
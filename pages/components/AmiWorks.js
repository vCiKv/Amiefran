import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import Firebase from '../api/Firebase'
import { getFirestore,collection, getDocs } from "firebase/firestore";
const AmiWorks=()=>{
  //click on view more re-directed to link 
  //hover over object revel mre details 
    const [workData,setWorkData]=useState([])
    const [showWorkPopUp,setShowWorkPopUp]=useState(false)
    const [workPopUpData,setWorkPopUpData]=useState([])

    useEffect(()=>{
        async function getWorkData(){
          const db = getFirestore(Firebase)
          let tempData = []
          const snapShot =await getDocs(collection(db,'Amiefran-works'))  
          snapShot.docs.forEach(doc => {
              tempData.push({id:doc.id, ...doc.data()})
          });
          setWorkData(tempData)
        }
      getWorkData();        
      // const unsubscribe = Firebase
      //     .firestore()
      //     .collection('Amiefran-works')
      //     .onSnapshot((snapshot) =>{
      //         const TempData = ( 
      //             snapshot.docs.map(
      //                 doc=> ({
      //                     id:doc.id, 
      //                     ...doc.data()
      //                 })
      //             )    
      //         )
      //         setWorkData(TempData)
      //     })
      // return() => unsubscribe()
    },[])
    const PopUp= (props)=>{
      const data =  props.data
      const open = props.open 
      const setOpen = props.setOpen 
      return(
        <div className={open?"modal is-active":"modal"}>
          <div onClick={()=>setShowWorkPopUp(!open)} className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img layout="fill" src={data.image_url} alt={data.title}/>
                </figure>
              </div>
              <div className="card-content">
                <p className="card-header-title is-size-2">{data.title}</p>
                <p className="subtitle">{data.short_text}</p>
                <div className="content">
                  {data.full_text}
                </div>
              </div>
            </div>
          </div>
          <button onClick={()=>setShowWorkPopUp(!open)}className="modal-close is-large" aria-label="close"></button>
        </div>
      )
    }

    const worksInfo = workData.map(data =>{
      const clickPopUp=()=>{
        setShowWorkPopUp(!workPopUpData)
        setWorkPopUpData(data)
      }
      return(
        <div key={data.id} className="column">
          <div className="work card">
            <div className="card-image">
              <figure className="image is-4by3">
                <Image layout="fill" src={data.image_url} alt={data.title}/>
              </figure>
              <div className="card-content amiefran-works">
                <h4 className="card-header-title"> {data.title}  </h4>
                <p>{data.short_text}</p><br/>
                <button className="button is-gold" onClick={clickPopUp}>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
    
    return(
      <section id="works" className="section">
        <div className="container">
          <div className ="has-text-centered is-capitalized mb-6">
            <h2 className="title is-1 ">Our Works</h2>
            <p className="is-size-5">
              We Offers all sorts of services which include Rebum dolores amet gubergren no tempor clita sed aliquyam duo, invidunt eos consetetur sadipscing ipsum.
            </p>
          </div>
          <div className="columns">
           {worksInfo}  
          </div>
        </div>
        <PopUp open={showWorkPopUp} setOpen={setShowWorkPopUp} data={workPopUpData}/>
      </section>
    )
  }
export default AmiWorks
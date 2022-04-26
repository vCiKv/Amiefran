
import {useState,useEffect} from 'react' 
import Firebase from '../components/Firebase'
import { getFirestore,collection, getDocs } from "firebase/firestore"
export default function Catalog(){
    const [catalogData,setCatalogData] = useState([])
    useEffect(()=>{
        async function getCatalogData(){
            const db = getFirestore(Firebase)
            let tempData = []
            const snapShot = await getDocs(collection(db,'catalog'))  
            snapShot.docs.forEach(doc => {
                tempData.push({id:doc.id, ...doc.data()})
            });
            setCatalogData(tempData)
        }
        getCatalogData(); 
    },[])
    const data = [
        {
            title:'a place',
            code:'A50',
            image:'https://images.unsplash.com/photo-1481018766939-e811776a906a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50JTIwZGVzZ2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
          

        },
        {
            title:'a newer place',
            code:'C30',
            image:'https://images.unsplash.com/photo-1481018685621-0c069c99fce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50JTIwZGVzZ2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            description:'need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
     
        },
        {
            title:'lol lol',
            code:'L94',
            image:'https://images.unsplash.com/photo-1622131815452-cc00d8d89f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50JTIwZGVzZ2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            description:'readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        }
    ]
    // const discountedPrice=(price,discount)=>{
    //     return price * (discount/100)
    // }
    const tagStyle={
        position:'absolute',
        top:0,
        padding:'5px',
        backgroundColor:"rgba(0,0,0,0.4)",
        color:'white',
        textTransform:'uppercase',
        zIndex:2
    }
    const cardTextStyle ={
        height:'200px',
        overflowX:'auto'
    }
    return (
        <div className="catalog container">
            <h1 className="is-size-1 is-gold mb-5" style={{textAlign:'center'}}>Our Catalog</h1>
            <div className="columns is-multiline">
                {catalogData.map(item=>(
                    <div key={item.id} className="column is-one-third-tablet">
                       <div className="card" >
                           <span style={tagStyle}>{item.code}</span>
                           <div className="card-image">
                               <figure className="image is-4by3">
                                   <img src={item.image} alt={item.title+' image'}/>
                               </figure>
                           </div>
                           <div className="card-content">
                               <p className="title is-2 has-text-white" style={{height:'90px'}}>{item.title}</p>
                               <div className="content" style={cardTextStyle}>{item.description}</div>
                           </div>
                       </div>
                   </div>
                ))}
            </div>
        </div>
    )
}
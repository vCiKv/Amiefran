import {useState,useMemo} from 'react';
import Script from 'next/script'
import WorkTable from './components/WorkTable'
import ProductTable from './components/ProductTable'
import {AddProduct, AddWork} from './components/tableFunctions'
import UploadImage from './components/UploadImage'

//import Firebase from './Firebase'
//add/delete/edit our works 
//title img-link short-text main-text(module/pop-up)
const Dashboard =()=>{
    const [MenuOption, setMenuOption] = useState(0)
    const [isNav, setIsNav] = useState(false)
    //const [tableSubFunction, setTableSubFunction] = useState(defaultTable)
    const handleMenuClick=(c)=>{
       // setTableSubFunction(defaultTable)
        setIsNav(!isNav)
        setMenuOption(c)
    }
    
    const MenuUI =() =>{
        const active={display:"block"}
        return(
            <>
            <span onClick={()=>{setIsNav(!isNav)}}className="menu-burger">
                <ion-icon  name="menu-outline"  size="large"></ion-icon>
            </span>
            <aside style={isNav? active: {}}className="ami-menu menu">     
                <ul className="menu-label">
                    <li onClick={()=>handleMenuClick(0)}>Home</li>
                </ul>
                <p className="menu-label">
                    Our Works
                </p>
                <ul className="menu-list">
                    <li><a onClick={()=>handleMenuClick(0)}>View Work</a></li>
                    <li><a onClick={()=>handleMenuClick(1)}>Add Work</a></li>
                </ul>
                <p className="menu-label">
                    Catalog
                </p>
                <ul className="menu-list">
                    <li><a onClick={()=>handleMenuClick(2)}>View Catalog</a></li>
                    <li><a onClick={()=>handleMenuClick(3)}>Add Catalog</a></li>

                </ul>
                {/* <p className="menu-label">
                    Images
                </p>
                <ul className="menu-list">
                    <li><a onClick={()=>handleMenuClick(2)}>Upload Image</a></li>
                    <li><a>Delete Image</a></li>
                </ul> */}
            </aside>
            </>
        )
    }
    
    const MainDashboard =()=>{
        const MenuController =(props) =>{
            const option = props.switch
            switch(option){
                case 1:
                    return <AddWork/>
                case 2:
                    return <ProductTable/>
                case 3:
                    return <AddProduct/>
                default:
                    return <WorkTable />
            }
        }
        return(
            <div className="container">
                <MenuController switch={MenuOption}/>
            </div> 
        )
    }
    return(
        <>
            <MenuUI/>
            <div className="menu-container p-4">            
                <MainDashboard/>
                <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
                <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
            </div>
        </>
    )    
}

export default Dashboard
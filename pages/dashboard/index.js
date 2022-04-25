import {useState,useMemo} from 'react'
import Script from 'next/script'
import WorkTable from '../../components/dashboard/WorkTable'
import ProductTable from '../../components/dashboard/ProductTable'
import {AddProduct, AddWork} from '../../components/dashboard/tableFunctions'
import IronSessionOptions from '../api/options'
import { withIronSessionSsr } from "iron-session/next"
import {useRouter} from 'next/router'
import axios from 'axios'
//import UploadImage from '../../components/dashboard/UploadImage'

//import Firebase from './Firebase'
//add/delete/edit our works 
//title img-link short-text main-text(module/pop-up)
const Dashboard =(props)=>{
    const [MenuOption, setMenuOption] = useState(0)
    const [loginData, setLoginData] = useState({username:'',password:''})
    const [isNav, setIsNav] = useState(false)
    //const [tableSubFunction, setTableSubFunction] = useState(defaultTable)
    const handleMenuClick=(c)=>{
       // setTableSubFunction(defaultTable)
        setIsNav(!isNav)
        setMenuOption(c)
    }
    const router = useRouter()
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
    const Form = ()=>{
        const handleSubmit =()=>{
            console.log('data',loginData)
            axios.post('/api/login',loginData)
            .then(res=>{
                console.log('ok',res)
                router.push('/dashboard')
            })
            .catch(e=>{
                console.log('error',e)
            })
        }
        const handleInput=(e)=>{   
            setLoginData({...loginData,[e.target.name]:e.target.value})
        }
        return(
            <form style={{maxWidth:'400px',margin:'0 auto'}}>
                <div className="card p-4">
                    <h1 className="is-size-1">Sign in</h1>
                    <input 
                        className="input my-3" 
                        type="text" 
                        placeholder="username" 
                        name="username"
                        value={loginData.username} 
                        onChange={handleInput}
                    />
                    <input 
                        className="input my-3" 
                        type="password" 
                        placeholder="password"
                        name="password" 
                        value={loginData.password || ''} 
                        onChange={handleInput}
                    />
                    <button className="button has-background-warning-dark my-3" type="button" onClick={handleSubmit}>login</button>
                </div>
            </form>
        )
    }
    const MainDashboard =()=>{
        const MenuController =(propsA) =>{
            const option = propsA.switch
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
    const FullDash=()=>{
        const Logout=()=>{
            const logout = ()=>{
                axios.get('/api/logout')
                .then(()=>{
                    router.push('/dashboard')
                })
                .catch((e)=>{
                    console.log(e)
                })
            }
            return <button onClick={logout} style={{position:'fixed',right:0,top:0,margin:'10px',zIndex:3}}className="button is-danger">Logout</button>
        }
        return(
            <>
            <MenuUI/>
            <div className="menu-container p-4">            
                <Logout/>
                <MainDashboard/>
                <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
                <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
            </div>
        </>
        )
    }
    return(
        props.user ? <FullDash/> : <Form/>
    )    
}

export default Dashboard

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user;
        return (user) ? {props: {user: req.session.user}} : {props: {user: null}}
    },IronSessionOptions)
import React, { useState } from 'react'
import Link from 'next/link'
const NavBar = () =>{
    const [showMessages,setShowMessages] = useState(false)
    const [mobileNavStyle,setMobileNavStyle] = useState(false) 
    const copyToClip=(x)=>{
      navigator.clipboard.writeText(x)
      setShowMessages(true)
      setTimeout(()=>{
        setShowMessages(false)
      },2500)
    }
    const navBurger=()=>{
      setMobileNavStyle(!mobileNavStyle)
    }
    const NavMessage=()=>{
      const styles={
        position: "fixed",
        left: "50%",
        bottom: "0",
        transform: "translate(-50%, -50%)",
        width:"300px",
        margin:"0 auto",
        textAlign:"center",
        zIndex:400,
        textTransform:"capitalize"
      }
      return(
        <div style={styles} className="notification">
          <button onClick={()=>{setShowMessages(false)}}className="delete"></button>
            <strong>copied to clipboard</strong>
        </div>  
      )
    }
    return(
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" href="#">
            <img 
              alt=""           
              src={("./imgs/logo_transparent.png")} 
            />
          </Link>
          <a role="button" className={mobileNavStyle ? 'navbar-burger is-active':'navbar-burger'} aria-label="menu" aria-expanded="false" data-target="navbarAmiefran" onClick={()=>{navBurger()}}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarAmiefran" className={mobileNavStyle ? 'navbar-menu is-active':'navbar-menu'}>
          <div onClick={()=>navBurger()} className="navbar-start">
            <Link href="/" className="navbar-item">
              Home
            </Link>
            <Link href="/#about" className="navbar-item">
              About
            </Link>
            <Link href="/#services" className="navbar-item">
              Services
            </Link>
            <Link href="/#works" className="navbar-item">
              Works
            </Link>
          </div>
          <div className="navbar-end">
            <div 
              onClick={()=>{copyToClip("2348096633638")}} 
              className="navbar-item">
              <div className="nav-phone-border">
                <p className="icon-text">
                  <span className="icon">
                    <ion-icon size="small" name="call-outline"></ion-icon>
                  </span>
                    +2348096633638
                </p>
              </div>
            </div>
          </div>
        </div>
        {showMessages && <NavMessage/>}
      </nav>
    )
  } 
export default NavBar
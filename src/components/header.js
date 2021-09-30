import React ,{useState}from 'react'
import "./header.css"
import {Link} from "react-router-dom"



function Header(props) {


    const [click,setClick]=useState(false);
    console.log(click);
    const handleClick=()=>setClick(!click);
    const handleLog=()=>{
        
        props.setLog(true)
    }
    const sideBarSrc=click?"cross.svg":"menu.svg";

    return (
        <>
        <div className="nav">
            <div className="logo">
            <Link to='/' className='navbar-logo'>
                <img  className='logo-img' src='logo.svg'/>
            </Link>
            </div>
            <div className="name">
                <div className="menu">
                <Link to="/" style={{ textDecoration: 'none' }}><strong>ALPHA HEALTH</strong></Link>
                </div>
            </div>
            <div className="log-in-bar">
                <div className="log-in" onclick={handleLog}>
                <Link to="/login.js" style={{ textDecoration: 'none' }}>{props.log?"login":"logout"}</Link>
                </div>
            </div>
            <div className="side-menu" onClick={handleClick}>
            <Link to={!click?'/sidebar.js':'/'} >
                <img  className='side-bar' src={sideBarSrc}/>
            </Link>
            </div>
        </div>
       </>
    )
}

export default Header;

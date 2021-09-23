import React ,{useState}from 'react'
import "./header.css"
import {Link} from "react-router-dom"


function Header() {

    const [click,setClick]=useState(false);

    const handleClick=()=>setClick(!click);
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
                <div className="log-in">
                <Link to="/login.js" style={{ textDecoration: 'none' }}>Log In </Link>
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

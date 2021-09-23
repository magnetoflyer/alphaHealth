import React from 'react'
import './sidebar.css'
import "../App.css"
import {SidebarData} from './SidebarData.js';
function Sidebar() {
    return (
        <div className="sidebar"> 
        <ul className="sidebar-list">
        {
            SidebarData.map((val,key) => {
                return(
                    <li key={key} 
                    className='row'
                    id ={window.location.pathname===val.link? "actice":'not-active'}
                    onClick={()=>{
                        window.location.pathname=val.link;
                    } }>
                        <div id='icon'>
                            {val.icon}
                        </div>
                        <div id='title'>
                        {val.title}
                        </div>
                    </li>
                )
            }
            )}
            </ul>
        </div>
    )
}

export default Sidebar

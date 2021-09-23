import React, {useState} from 'react';
import "./header.css";
import {validateUser} from  '../utiliy/utils';
import './login.css';



function Login() {
    const [msg, setMsg]=useState("Log In")
   
    const [user , setUser]=useState({
        userName:'',
        userPass:''
    })


    const handleChangeUser=(e)=>{
        console.log(e.target.value);
        setUser({...user,username:e.target.value})
    }


    const handleChangePass=(e)=>{
        console.log(e.target.value);
        setUser({...user,userPass:e.target.value})
    }
    const handleSubmit=()=>{
        if (validateUser(user)){
            setMsg("Log Out")
        }
    }
    return (
        <div className="login">
            <form 
            className="form" onSubmit={handleSubmit}>

                <input 
                className='input-field' 
                type="text" 
                placeholder="Username" 
                required 
                 onChange={handleChangeUser}
                  />

                <input

                 className='input-field' 
                 type='password' 
                 name='pwd' 
                 placeholder="Password" 
                 required 
                 onKeyPress={handleChangePass}
                 
                 />

                <button
                userName='input-button' 
                onClick={handleSubmit}>{msg}</button>
            </form>
           
            
        </div>
    )
}

export default Login;

import React, {useState} from 'react';
import { useHistory  } from 'react-router-dom';
import "./header.css";
import {validateUser} from '../utiliy/utils'
import './login.css';



function Login(props) {

    const history =useHistory();
    const [user , setUser]=useState({
        userName:'',
        userPass:''
    });// state to store username and password
    const [msg,setMsg]= useState("please input your credentials")



    const handleChangeUser=(e)=>{
        setUser({...user,userName:e.target.value});
    }; //to get username from inputfield

    const handleChangePass=(e)=>{   
        setUser({...user,userPass:e.target.value});
    };// to get passkey from inputfield

    const makeLog=()=>{
        props.setLog(true);
        console.log("logged out succesfully");
        history.push('./');
    };// to change the loggin status to true

    const handleSubmit=(event)=>{
        event.preventDefault();
        if (validateUser(user)){
            console.log("user verified successfully");
            props.setLog(false)
            history.push("/");     
        }
        else
        {
        console.log("user not verified");
        setMsg("Wrong passkey or username!")
        }
    };// to verify user from database

    if(props.log){
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
                onClick={handleSubmit}>login</button>
                <h3>{msg}</h3>
            </form>
           
            
        </div>
    )
    }

    else{
        return(
            <>
                <button onClick={makeLog}>logout</button>
            </>
        )
    }
}

export default Login;

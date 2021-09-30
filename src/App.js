import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/header';
import React,{useState} from 'react';
import Login from './components/login.js';
import Home from './components/HomeBody.js';
import contact from './components/contact.js';
import Dashboard from './components/dashboard.js';
import {SliderData} from './components/homeitems';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
function App() {
  const [log, setLog]= useState(true)



  return (
    <Router>
    <div className="App">
      <Header log={log} setLog={setLog} />
      <Home slides={SliderData}/>
      <switch>
      <Route path="/Sidebar.js"exact component={Sidebar} />
        </switch>
      <switch>
        <Route path="/login.js" exact component={()=><Login log={log} setLog={setLog}/>}/>
      </switch> 
        <switch>
      <Route path="/dashboard.js"exact component={Dashboard} />
        </switch>
        <switch>
      <Route path="/contact.js"exact component={contact} />
        </switch>
    </div>
    </Router>
  );
}

export default App;

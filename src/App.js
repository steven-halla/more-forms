import React, { useState } from 'react';


// import logo from './logo.svg';
import './App.css';

import UserForm from './components/UserForm';
import UserView from './components/UserView';


function App() {

  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    confirmPassword: ""

  });

  const updateState = (anything) => {
    setState(anything)
  }
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={updateState} />
      <UserView data={state} />
    </div>
  );
}

export default App;

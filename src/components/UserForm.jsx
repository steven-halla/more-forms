// import React from 'react';
import React, { useState } from 'react';

const UserForm = (props) => {
    const { inputs, setInputs } = props;
    const { state, setState } = useState(inputs);

    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");


    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const onChange_firstName = (e) => {
        if (e.target.value == ""){
            setFirstNameError("");

        } else if (e.target.value.length < 2){
            setFirstNameError("First name must be 2+ characters");
        } else setFirstNameError("");

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        console.log('e.target.value =', e.target.value)
    };

    const onChange_lastName = (e) => {
        if (e.target.value == ""){
            setLastNameError("");

        } else if (e.target.value.length < 2){
            setLastNameError("Last name must be 2+ characters");
        } else setLastNameError("");

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        console.log('e.target.value =', e.target.value)
    };

    const onChange_email = (e) => {
        if (e.target.value == ""){
            setEmailError("");

        } else if (e.target.value.length < 2){
            setEmailError("Email name must be 2+ characters");
        } else setEmailError("");

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        console.log('e.target.value =', e.target.value)
    };

    const onChange_password = (e) => {
        if (e.target.value == ""){
            setLastNameError("");

        } else if (e.target.value.length < 2){
            setPasswordError("password name must be 2+ characters");
        } else setPasswordError("");

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        console.log('e.target.value =', e.target.value)
    };

    const onChange_confirmPassword = (e) => {
        if (e.target.value == ""){
            setLastNameError("");

        } else if (e.target.value != inputs.password){
            setConfirmPasswordError("Passwords do not match");
        } else setConfirmPasswordError("");

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        console.log('e.target.value =', e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setInputs({
            firstname: state.firstName
        })
    }

    return(
        <form onSubmit={(e) => handleSubmit(e) }>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange= { onChange_firstName } />
                <p> {firstNameError} </p>

            </div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange= { onChange_lastName } />
                <p> {lastNameError} </p>
            <div>
                <label htmlFor="email">Email Address: </label>
                <input type="text" name="email" onChange= { onChange_email } />
                <p> { emailError} </p>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange= { onChange_password } />
                <p> { passwordError} </p>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange= { onChange_confirmPassword } />
                <p> { confirmPasswordError} </p>
            </div>
            <input type="submit" value="Create User" />
        
        </form>
    );
};



export default UserForm;
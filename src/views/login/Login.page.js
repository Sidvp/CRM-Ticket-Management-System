// React Arrow Functional Component (rafc)

import React, {useState} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import * as ReactBootstrap from 'react-bootstrap';

import './login.style.css';
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/reset-password/ResetPassword.comp";
// import { useState } from 'react';

export const Login = () => {
    // const [variable, function] = useState(initialState)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formLoad, setFormLoad] = useState('login');  // load the login page first.

    const handleOnChange = event =>{
        const {name, value} = event.target;

        switch(name){
            case 'email': 
                setEmail(value)
                break;
            
            case 'password': 
                setPassword(value)
                break;

            default:
                break;
        }

        console.log (name, value);
    };
    
    const handleOnSubmit = event =>{
        // prevent refreshing the page
        event.preventDefault()
        if (!email || !password){
            return alert("All fields are mandatory!!");
        }

        // Todo: call API to submit the form
        console.log (email, password);
    };

    const formSwitcher = formType =>{
        setFormLoad(formType);
    };


    const handleOnResetSubmit = event =>{
        // prevent refreshing the page
        event.preventDefault()
        if (!email){
            return alert("Kindly enter your Email ID!!");
        }

        // Todo: call API to submit the form
        console.log (email);
    };

    return (
        <div className="login-page bg-info">
            <Jumbotron className="form-box">
                {formLoad === 'login' && (
                    <LoginForm 
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        formSwitcher={formSwitcher} 
                        email = {email}
                        password = {password}
                    />
                )}

                {formLoad === 'reset' && (
                    <ResetPassword 
                        handleOnChange={handleOnChange}
                        handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                        email = {email}
                    />
                )}
            </Jumbotron> 
        </div>
    );
};



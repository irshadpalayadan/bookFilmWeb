import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import loginService from '../../api/loginService';

import './css/signin.css'

var md5 = require('md5');


class Signin extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: "",
        }
    }


    _onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    _submitLogin = () => {
        loginService.login(this.state.username, md5(this.state.password));
    }


    render() {
        return(
                <div className='SigninBox'>
                    <form className='SigninForm'>
                        {/*
                            TODO : create logo image and logo name
                            <Logo />
                        */}
                        <span className='SigninTitle'>Login</span>
                        <div className="userblock" data-validate="Username is reauired">
						    <span className="userBlockLabel">Username</span>
						    <input className="userBlockInput" type="text" name="username" value={this.state.username} onChange = {this._onValueChange}  placeholder="Type your username"></input>
                            <Glyphicon glyph="user" className="glyph"/>
                        </div>
                        <div className="passwordBlock" data-validate="Password is required">
						    <span className="passBlockLabel">Password</span>
						    <input className="passBlockInput" type="password" name="password" value={this.state.password} onChange = {this._onValueChange} placeholder="Type your password"></input>
                            <Glyphicon glyph="lock" className="glyph"/>
					    </div>
                        <div className="forgotPassword">
                            {/*
                                TODO : create a router to the forgot page
                                <a href="#">Forgot password? </a>
                            */}
						    <span>Forgot password? </span>
					    </div>
                        <Button onClick={this._submitLogin}> Login </Button>
                    </form>
                </div>
        );
    }

}



class SignInOutDash extends Component{
    render() {
        return(
            <div>
                <div className='loginSideBox'>
                    <Signin/>
                </div>
            </div>
            
        );
    }
}

export default SignInOutDash;
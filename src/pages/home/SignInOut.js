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
            password: '',
        }
    }


    _onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    _submitSignin = () => {
        loginService.login(this.state.username, md5(this.state.password));
    }


    render() {
        return(
                <div className='SignInOutBox'>
                    <form className='SignInOutForm'>
                        {/*
                            TODO : create logo image and logo name
                            <Logo />
                        */}
                        <span className='SignInOutTitle'>Login</span>
                        <div className="textBlock" data-validate="Username is reauired">
						    <span className="textBlockLabel">Username</span>
						    <input className="textBlockInput" type="text" name="username" value={this.state.username} onChange = {this._onValueChange}  placeholder="Type your username"></input>
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
                        <Button onClick={this._submitSignin}> Login </Button>
                    </form>
                </div>
        );
    }

}




class Signup extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            phno:'',
            password:'',
            password2:'',
        }
    }


    _onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    _submitSignup = () => {
        loginService.signup(this.state.username, this.state.email, this.state.phno, md5(this.state.password));
    }


    render() {
        return(
                <div className='SignInOutBox'>
                    <form className='SignInOutForm'>
                        {/*
                            TODO : create logo image and logo name
                            <Logo />
                        */}
                        <span className='SignInOutTitle'>SignUp</span>
                        <div className="textBlock" data-validate="Username is reauired">
						    <span className="textBlockLabel">Username</span>
						    <input className="textBlockInput" type="text" name="username" value={this.state.username} onChange = {this._onValueChange}  placeholder="Type your username"></input>
                            <Glyphicon glyph="user" className="glyph"/>
                        </div>
                        <div className="textBlock" data-validate="E-mail is reauired">
						    <span className="textBlockLabel">E-mail</span>
						    <input className="textBlockInput" type="text" name="email" value={this.state.email} onChange = {this._onValueChange}  placeholder="Type your e-mail"></input>
                            <Glyphicon glyph="envelope" className="glyph"/>
                        </div>
                        <div className="textBlock" data-validate="Phone Number is reauired">
						    <span className="textBlockLabel">Phone Number</span>
						    <input className="textBlockInput" type="text" name="phno" value={this.state.phno} onChange = {this._onValueChange}  placeholder="Type your Phone number"></input>
                            <Glyphicon glyph="phone" className="glyph"/>
                        </div>
                        <div className="passwordBlock" data-validate="Password is required">
						    <span className="passBlockLabel">Password</span>
						    <input className="passBlockInput" type="password" name="password" value={this.state.password} onChange = {this._onValueChange} placeholder="Type your password"></input>
                            <Glyphicon glyph="lock" className="glyph"/>
					    </div>
                        <div className="passwordBlock" data-validate="Password is required">
						    <span className="passBlockLabel">Re-Enter Password</span>
						    <input className="passBlockInput" type="password" name="password2" value={this.state.password2} onChange = {this._onValueChange} placeholder="Re-Enter your password"></input>
                            <Glyphicon glyph="lock" className="glyph"/>
					    </div>
                        <Button onClick={this._submitSignup}> Signup </Button>

                        
                        <div className="haveAnAccount">
                            {/*
                                TODO : create a router to the login page
                                <a href="#">Forgot password? </a>
                            */}
						    <span>Have an account? </span>
					    </div>
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
import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

import './css/signin.css'



class Signin extends Component {
    render() {
        return(
            <div className='SigninBoxOuter'>
                <div className='SigninBox'>
                    <form className='SigninForm'>
                        {/*
                            TODO : create logo image and logo name
                            <Logo />
                        */}
                        <span className='SigninTitle'>Login</span>
                        <div className="userblock" data-validate="Username is reauired">
						    <span className="userBlockLabel">Username</span>
						    <input className="userBlockInput" type="text" name="username" placeholder="Type your username"></input>
                            <Glyphicon glyph="user" className="glyph"/>
                        </div>
                        <div class="passwordBlock" data-validate="Password is required">
						    <span class="passBlockLabel">Password</span>
						    <input class="passBlockInput" type="password" name="pass" placeholder="Type your password"></input>
                            <Glyphicon glyph="lock" className="glyph"/>
					    </div>
                        <div class="forgotPassword">
                            {/*
                                TODO : create a router to the forgot page
                                <a href="#">Forgot password? </a>
                            */}
						    <span>Forgot password? </span>
					    </div>
                        <Button > Login </Button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Signin;
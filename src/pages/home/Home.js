import React, { Component } from 'react';
import NavbarLogout from './navbar_logout';
import NavbarLogin from './navbar_login';
import Footer from './footer';
import Signinout from './SignInOut';



class Home extends Component {

    constructor() {
        super();
        this.state = {
            // TODO : need a function to check user is active or not ... update value before render
            isUserActive : false,
        }
    }

    render() {
        return(
            <div>
               { this.state.isUserActive ? <NavbarLogin/> : <NavbarLogout/> }
               <div className="container" style={{paddingTop: '50px', width: '100%'}}>
                {  !this.state.isUserActive && <Signinout/>  }
                </div>
               <Footer/>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import NavbarLogout from './navbar_logout';
import NavbarLogin from './navbar_login';

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
            </div>
        );
    }
}

export default Home;
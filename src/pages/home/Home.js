import React, { Component } from 'react';
import NavbarLogout from './navbar_logout';
import Footer from './footer';
import SignInOut from './SignInOut';
import loginService from '../../api/loginService';



class Home extends Component {

    constructor() {
        super();
        this.state = {
            isSignInCheckDone : false
        }
    }

    componentDidMount() {
        loginService.checkSignInStatus()
        .then( res => res.json() )
        .then( resJson => {
            if(resJson.status === 'success') {
                window.location = resJson.redirectUrl;  
            } else {
                this.setState( {isSignInCheckDone : true} );
            }
        })
    }


    render() {
        return(
            <>
            { this.state.isSignInCheckDone && 
                <div>
                    <NavbarLogout/>
                    <div className="container" style={{paddingTop: '50px', width: '100%'}}>
                        <SignInOut />
                    </div>
                <Footer/>
                </div> 
            }
            </>
        );
    }
}

export default Home;
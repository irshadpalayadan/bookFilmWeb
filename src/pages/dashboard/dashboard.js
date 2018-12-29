import React, {Component} from 'react';
import NavbarLogin from './navbar_login';
import Footer from '../home/footer';
import loginService from '../../api/loginService';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = { 
                        isSignInCheckDone : false
                     };
    }

    componentDidMount() {
        loginService.checkSignInStatus()
        .then( res => res.json() )
        .then( resJson => {
            if(resJson.status === 'success') {
                this.setState( {isSignInCheckDone : true});
                
            } else {
                //window.location = resJson.redirectUrl;  
            }
        })
    }

    render(){

        if( !this.state.isSignInCheckDone ) {
            return null;
        }

        return(
            <div>
               <NavbarLogin/>
               <div className="container" style={{paddingTop: '50px', width: '100%'}}>
                    hello Irshad
                </div>
               <Footer/>
            </div>
        );
    }

}

export default Dashboard;
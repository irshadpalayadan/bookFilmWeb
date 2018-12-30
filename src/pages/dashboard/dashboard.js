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
        loginService.getUserProfile()
        .then( res => res.json() )
        .then( resJson => {
            if(resJson.status === 'success') {
                this.setState({
                                isSignInCheckDone : true,
                                profile: {
                                            name: resJson.name,
                                            email: resJson.email,
                                            imgUrl : resJson.img.value,
                                            imgType : resJson.img.type
                                         }
                             });                
            } else {
                window.location = resJson.redirectUrl;  
            }
        })
    }

    render(){

        if( !this.state.isSignInCheckDone ) {
            return null;
        }

        return(
            <div>
               <NavbarLogin profile={this.state.profile}/>
               <div className="container" style={{paddingTop: '50px', width: '100%'}}>
                    Hello {this.state.profile.name}
                </div>
               <Footer/>
            </div>
        );
    }

}

export default Dashboard;
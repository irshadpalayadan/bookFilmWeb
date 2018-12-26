import React, {Component} from 'react';
import NavbarLogin from '../home/navbar_login';
import Footer from '../home/footer';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render(){
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
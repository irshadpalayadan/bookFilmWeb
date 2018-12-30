import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Button, FormGroup, FormControl} from 'react-bootstrap';
import loginService from '../../api/loginService'
import '../css/dashboard.css'


class NavbarLogin extends Component {

    _submitSignOut() {
        loginService.signout()
        .then( res => res.json())
        .then((resJson) => {
            if(resJson.status === 'success') {
                window.location = resJson.redirectUrl;
            } else {
                window.location = '/'
            }
        })
    }

    render() {
        return(
            <Navbar fixedTop inverse fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#Home">BookFilm</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} id="basic-nav-dropdown" title={
                                                            <div className="navbarUserThumbDiv pull-left">
                                                            <img className="navbarUserThumb" alt="user thump" src={this.props.profile.imgType === 'url' && this.props.profile.imgUrl} />
                                                            </div> } >
                            <MenuItem eventKey={3.1}>
                                <div className='navbarProfContainer'>
                                    <div className="navbarProfImgDiv">
                                        <img className='navbarProfImg' alt='user pic' src={this.props.profile.imgType === 'url' && this.props.profile.imgUrl}></img>
                                        <span className='navbarProfImgChange'>change</span>
                                    </div>
                                    <div className='navbarProfDetailDiv'>
                                        <div className='navbarProfDetailName'>{this.props.profile.name}</div>
                                        <div className='navbarProfDetailEmail'>{this.props.profile.email}</div>            
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2}>Booking History</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} onClick={this._submitSignOut}>SignOut</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default NavbarLogin;
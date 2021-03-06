import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavbarLogout extends Component {
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
                        <NavItem href="#">
                            Temporary Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default NavbarLogout;
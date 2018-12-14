import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Footer extends Component {


    render() {
        return(
            <Navbar fixedBottom fluid>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="#">
                            All Rights Are Reserved To Irshad
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="#">
                            Help : 00-1122
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default Footer;
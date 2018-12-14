import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Button, FormGroup, FormControl} from 'react-bootstrap';

class NavbarLogin extends Component {

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
                        <NavDropdown eventKey={3} title="Irshad" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Profile</MenuItem>
                            <MenuItem eventKey={3.2}>Booking History</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
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
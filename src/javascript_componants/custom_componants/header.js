import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css'
import logo from '../../images/logo.png'

import React from "react";

import Login from './login'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Logout from './logout';

function Header(props) {

    let isLoggedIn = props.bool;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand><img id="test" src={logo} alt='logo' />{" "}Deluxe Clothing</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                {
                    isLoggedIn === true ? <Logout onClick={props.onClick} /> : <Login onClick={props.onClick}/>
                }

            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;
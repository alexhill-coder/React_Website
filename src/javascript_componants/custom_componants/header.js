// Imports the logo created for the site to be inserted into the header of the site.
import logo from '../../images/logo.png';

// Imports the login & logout componants and will only display one depending on the variable in the App.js file 
import Login from './login';
import Logout from './logout';

// Imports the bootstrap componants to aid in the styling of the site.
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// This function retreives the boolean/function to be used to select/insert different attributes into the header. 
function Header(props) {

    // Retrieves the boolean given from the App file.
    let isLoggedIn = props.bool;

    return (

        // This creates the style and information of the header using the bootstrap navbar componants.
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

            {/* Uses the imported image as the logo and a ternary to insert the login or outout button. */}
            <Navbar.Brand><img id="imgController" src={logo} alt='logo' />{" "}Deluxe Clothing</Navbar.Brand>
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

// This file is then exported to be used in the app file.
export default Header;
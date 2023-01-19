// Uses bootstrap componants to create the buttons for the menu.
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Retrieves the componant to display matching link strings.
import { Link } from 'react-router-dom';


// Provides the menu buttons to be inserted into the header. 
function Menu() {

    return (  
        
            // The form is used to provide the spacing of the buttons.
            <Form className="d-flex justify-content-center mb-2 mt-2 mt-xl-0 mb-xl-0">

                {/* Each button is given a link tag that tells the page which element to display when clicked. */}
                <Link to={"/"}><Button className="me-3" variant="outline-light">Home</Button></Link>
                <Link to={"/shop"}><Button className="me-3" variant="outline-light">Shop</Button></Link>
                <Link to={"/interest"}><Button className="me-3" variant="outline-light">Interest</Button></Link>
                <Link to={"/profile"}><Button className="me-3" variant="outline-light">Profile</Button></Link>
                <Link to={"/legal"}><Button className="me-3" variant="outline-light">Legal</Button></Link>
            </Form>
    );
}

// This file is then exported to be used in the app file.
export default Menu;
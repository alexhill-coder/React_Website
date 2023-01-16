// Uses bootstrap componants to create the welcome text header and the button.
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Inserts the function from the app file and returns the logout section of the header.
function Logout(props) {
    return (
        <Form className="d-flex ms-auto">
            <Navbar.Brand className='d-flex ms-auto'>Welcome Back!</Navbar.Brand>
            <Button variant="outline-danger" onClick={props.onClick}>Logout</Button>
        </Form>
    );
}

// This is then exported to the app file.
export default Logout;
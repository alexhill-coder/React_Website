import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Logout(props) {
    return (
        <Form className="d-flex ms-auto">
            <Navbar.Brand className='d-flex ms-auto'>Welcome Back!</Navbar.Brand>
            <Button variant="outline-danger" onClick={props.onClick}>Logout</Button>
        </Form>
    );
}

export default Logout;
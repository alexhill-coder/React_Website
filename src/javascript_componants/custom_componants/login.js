// Uses bootstrap componants to create the inputs for the email/password fields and button.
import Input from './input';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Inserts the function from the app file and returns the login section of the header.
function Login(props) {
    return (
    <Form className="d-flex ms-auto">
    <Input type="email" placeholder="Email or Username" />
    <Input type="password" placeholder="Password" />
    <Button variant="outline-success" onClick={props.onClick}>Login</Button>
    </Form>
    );
}

// This is then exported to the app file.
export default Login;
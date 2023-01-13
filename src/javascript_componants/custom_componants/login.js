import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css';

import Input from './input';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login(props) {
    return (
    <Form className="d-flex ms-auto">
    <Input type="email" placeholder="Email or Username" />
    <Input type="password" placeholder="Password" />
    <Button variant="outline-success" onClick={props.onClick}>Login</Button>
    </Form>
    );
}

export default Login;
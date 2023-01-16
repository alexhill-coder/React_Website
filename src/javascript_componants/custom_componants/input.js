// Uses bootstrap componants to create the parameters for the fields.
import Form from 'react-bootstrap/Form';

// The function uses props to provide the parameters of the input fields.
function Input(props) { 
    return (
        <Form.Control
              type={props.type}
              placeholder={props.placeholder}
              className="me-2"
              aria-label={props.type}
            />
);
}

// This is then exported to the login file.
export default Input;
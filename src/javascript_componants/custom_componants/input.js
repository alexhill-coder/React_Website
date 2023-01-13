import Form from 'react-bootstrap/Form';

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

export default Input;
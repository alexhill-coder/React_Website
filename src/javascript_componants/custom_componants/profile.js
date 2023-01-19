// Uses bootstrap componants to create the buttons for the profile heading.
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Controls the title and the button.
function Profile(props) {

    // Provides the intial header that tells the user to login. Once the user has done so and logged out the
    // new message saying that the user has logged out.
    let welcome = props.welcome;

    return (
        
        // div is used to center the items using bootstrap classes.
        <div className='d-flex justify-content-center align-items-center mt-5'>   

        {/* Retrieving a boolean from the app file it uses a ternary to determine which text/button to display.*/}
        {props.bool ? <h1 className='text-white me-5'>Nice to see you again</h1> : <h1 className='text-white me-5'>{welcome}</h1>}

        {/* The button is nearly identical to the one displayed in the header and operates the same way. */}
        {props.bool ?  <Form><Button onClick={props.onClick} variant="outline-danger">Logout</Button></Form>: 
        <Form><Button onClick={props.onClick} variant="outline-success">Login</Button></Form>}
        </div> 
);
}

// This is then exported to the app file.
export default Profile;


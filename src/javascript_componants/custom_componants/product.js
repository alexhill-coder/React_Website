// Retrieves the all the required bootstrap componants to finsh the product card started in the products file. 
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Retrieves the attributes from the props parameter and inserts to supply the required information for each card.
function Product(props) {
    return (
        <Col>
            <Card className='mx-auto'>
                <Card.Img variant="top" src={props.source} alt={props.alt} />
                <Card.Body>
                    <Card.Text>
                    {props.text}
                    </Card.Text>
                    <Button variant="btn btn-outline-light">View Products</Button>
                </Card.Body>
            </Card>
        </Col>
)}

// This is then exported to the products file.
export default Product;
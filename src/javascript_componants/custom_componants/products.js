// Imports part of the bootstrap grid componant with the final element returned from the product file. 
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Product from './product';

// This function retrieves the array from the landing page and uses it to create a product card for item in the object.
function Products(props) {

    // Variable that holds the retrieved array object.
    let whichList = props.list;

    // A function that tells the map where to place each key value to create the product card.
    function createProduct(list) {
        return (
        <Product key={list.id} source={list.source} alt={list.alt} text={list.text} />
        )
    }

    return (
        <div className='products'>
        <Container className='text-center text-white'>
            <Row >
                {/* The map which creates each product card in the array. */}
                {whichList.map(createProduct)}
            </Row>
        </Container>
        </div>
)}

// This is then exported to the landing page file.
export default Products;
// Imports a grid componant from bootstrap to evenly distribute the text columns.
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// A simple container to contain the intro text for the website. Could be made more useful if the text was in an object and
// placed using a map.
function TextIntro() {
    return (
        <div className='textIntro'>
        <Container className='text-center text-white'>
            {/* This is part of the grid conponant where each row element is used to divide up the grid. */}
            <Row>
                {/* Each row is its own column with the first line made bold with italics to make them stand out. */}
                <Col><b><i>Experts in modern design</i></b><br /><br /> working in the industry for over a decade, bringing you the most award winning designs than any other talent around.</Col>
                <Col><b><i>Indulge your love for fashion</i></b><br /><br /> when you visit Deluxe stores, be drawn to authentic high quality materials in creatively curated spaces.</Col>
                <Col><b><i>Clothes for all your occasions</i></b><br /><br /> whatever your social needs, be sure that we will have a hat, jacket, shirt, trousers, shoes, etc to meet your tastes.</Col>
            </Row>
        </Container>
        </div>
)}

// This is then exported to the landing page file.
export default TextIntro;
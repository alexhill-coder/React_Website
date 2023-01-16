// Uses the bootstrap componant to control how the text and style behaves on the images.
import Card from 'react-bootstrap/Card';

// Creates a bootstrap card to cover the width of the page with a text overlay.
function Productintros(props) {
    return (
<div className='cardContainer d-flex align-items-center card-productIntro'>
            <Card className="text-white">
            <Card.Img src={props.source} alt={props.alt} />

            {/* This element provides a linear gradient to help the text stand out on the image. */}
            <Card.ImgOverlay className='background'>
            </Card.ImgOverlay>
            <Card.ImgOverlay className='d-flex align-items-center'>

            {/* Provides the text on the image. It is split in two to keep it to the left side of the screen. */}
            <Card.Text>
            {props.text1} <br /> {props.text2}
            </Card.Text>
            </Card.ImgOverlay>
            </Card>
        </div>
);
}

// This is then exported to the landing page file.
export default Productintros;
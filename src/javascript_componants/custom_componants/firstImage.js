// Uses the bootstrap componant to control the first image element on the page.
import Image from 'react-bootstrap/Image'

// Returns the first image on the site. Later found that bootstrap cards can be used for this.
function FirstImage() {
    return (
        
        // using ids with css and bootstrap componants to fix the image and title to the top of the page. 
        <div id="firstImage">
            <Image fluid="true" src="https://www.gannett-cdn.com/-mm-/72d7a379e79c1e2d3c2cb6f4c6c56235a664d809/c=0-373-4032-2651/local/-/media/2017/08/18/WIGroup/Sheboygan/636386741045534200-IMG-7363.JPG" alt="Clothes" / >
            <h1 id='firstText' className='text-wrap'>Deluxe Clothing<br />Bringing you the Finest Quality</h1>
        </div>
);
}

// This is then exported to the landing page file.
export default FirstImage;
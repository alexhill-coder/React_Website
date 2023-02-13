// Used to insert a custom image onto the site. 
import fashion from '../../images/fashion-02final.jpg';

// Calls the various componants to be used in the main body of the site.
import FirstImage from './firstImage';
import Productintros from './productIntros';
import TextIntro from './textIntro';
import Products from './products';

// Imports 2 arrays, as they aren't componants the standard naming convention is used. Done in this way 
// to insert the products into differet sections of the page.
import {list1, list2} from './productList';

// This function combines all the differant componants used to make the main body of the site. 
function Landingpage() {
    return (
        
    <div>
        {/* The first 2 elements are designed specifically for their position and will need to be altered directly to change. */}
        <FirstImage />
        <TextIntro />

        {/* This element requires the image source and text to be passed on via props. This is used as an intro 
        to the first product section */}
        <Productintros source="https://adamsfineclothing.com/wp-content/uploads/2021/04/image001-1920x600.jpg" 
        alt="shirt image" text1="Bringing you exquisite" text2="jackets and shirts." />

        {/* This element uses the array passed to it to create every product object found. */}
        <Products list={list1} />
        {/* This is used as an intro to the second product section */}
        <Productintros source={fashion} 
        alt="trouser image" text1="and the most fashionable" text2="trousers and shoes." />
        <Products list={list2} />
    </div>
);
}

// This is then exported to the app file.
export default Landingpage;
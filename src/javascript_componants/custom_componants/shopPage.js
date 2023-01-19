// Retrievess the element to create the product cards. 
import Products from './products';

// Imports 2 arrays, as they aren't componants the standard naming convention is used. Done in this way 
// to allow for the insertion of the products into differet sections of the page if needed.
import {list1, list2} from './productList';

// This function creates the product cards using the imported list objects.
function Shoppage() {
    return (
        
        // Creates the products for the shop section of the site. 
        <div id='products'>
            <div>
            <Products list={list1} />
            <Products list={list2} />
            </div>
        </div>
);
}

// This is then exported to the app file.
export default Shoppage;
// This file is where all the exported componants are brought together then exported to the index.js file
// to be rendered to the page.

// Retrieves the componants needed to choose which element to display. Due to issues deploying on
// github needed to use HashRouter instead of RouteRouter to fix a problem where the landing page
// componant wasn't being displayed because the homepage parameter in the package.json was
// replacing the initial "/" with "React_Webpage" in the browser. 
import { Route, Routes, HashRouter } from 'react-router-dom';

// Retreieves all the site pages.
import Header from './custom_componants/header';
import Landingpage from './custom_componants/landingPage';
import Footer from './custom_componants/footer';
import Shoppage from './custom_componants/shopPage';
import Interest from './custom_componants/interest';
import Profile from './custom_componants/profile';
import Legal from './custom_componants/legal';

// This import is needed to use the useState function.
import React from "react";

// This function collects all the componants together and controls the appearance of the elements which
// alters when the buttons are used.
function App() {
  
  // The boolean variable is used to determine which state of the header login section is shown.
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

   // The string is sent to the profile section which alters if the user has logged in before.
  const [headingText, setHeading] = React.useState("Please log in to see you profile.");

  // This function is provided to all login/logout buttons and changes the boolean to alter the buttons
  // and the text displayed in the profile section. 
  function stateToggle() {
    setIsLoggedIn(prev => !prev);
    setHeading("User has logged out.");
  }

  // This usestate is to store/control the calculations for the interest calculator. 
  const [interestCalculator, setInterestParameters] = React.useState(
    {
      "amount": 0,
      "months": 0,
      "amountTotal": 0,
      "perMonth": 0
    }
  );

  // This function retrieves the inputs from the interest page and updates the display accordingly.
  function totalAmount(event) {

    // Using the usestate function allows for the previous object data to be retrieved.
    setInterestParameters(prevValue => {

      // If the retrieved input is a number it is then stored and calculated depending on
      // which input is being retrieved.
      if(isNaN(event.target.value) === false && event.target.id === "totalCost") {
        
        // The object retrieves previous values or replaces them with the updated input and then calculates 
        // the correct value for that key. It has to be indicated that they are a number or it is assumed 
        // to be a string.
        return {
            "amount": Number(event.target.value),
            "months": Number(prevValue.months),
            "amountTotal": Number(event.target.value) + Number(event.target.value * 0.2),
            "perMonth": (Number(event.target.value) + Number(event.target.value * 0.2)) / Number(prevValue.months)
          }   
      }
      else if(isNaN(event.target.value) === false && event.target.id === "totalMonths") {
        return {
          "amount": prevValue.amount,
          "months": event.target.value,
          "amountTotal": prevValue.amountTotal,
          "perMonth": prevValue.amountTotal / event.target.value
        }   
      }
    })
  }

  // This section contains the entire page that will be sent to the index to be rendered.
  return (

    // This div is used to keep the footer section at the bottom of the page.
    <div className='d-flex flex-column min-vh-100'>
    
    {/* The browserRouter is used to indicate the elements that are used for navigation */}
      <HashRouter>
        {isLoggedIn ? <Header bool={isLoggedIn} onClick={stateToggle} /> : 
        <Header bool={isLoggedIn} onClick={stateToggle} />}
        
        {/* Routes section indicates which elements to show using matching links from the menu buttons. */}
        <Routes>
        {/* Each element is inserted into a route tag to indicate which section to show when the matching 
        path link is clicked. */}
          <Route exact path="/" element={<Landingpage />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/interest" element={<Interest information={interestCalculator} onChange={totalAmount} />} />
          <Route path="/profile" element={<Profile welcome={headingText} bool={isLoggedIn} onClick={stateToggle} />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        </HashRouter>

        {/* The footer just contains the copyright information with a function to get the current year. */}
        <Footer />
    </div>
  );
}

// This is then exported to the index.js file.
export default App;

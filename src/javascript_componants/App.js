// This file is where all the exported componants are brought together then exported to the index.js file
// to be rendered to the page.
import Header from './custom_componants/header';
import Landingpage from './custom_componants/landingPage';
import Footer from './custom_componants/footer';

// This import is needed to use the useState function.
import React from "react";

// This function collects all the componants together and controls the appearance of the header which
// alters when the buttons are used.
function App() {

  // The boolean variable is used to determine which state of the header is shown.
  let isLoggedIn = true;

  // A react hook is used to change the appearance on the header with the inital header displaying the login fields.
  // The header componant takes in 2 props a boolean and a function.
  let [header, stateChange] = React.useState(<Header bool={false} onClick={logInOut} />);

  // This function is passed as the onClick event for the buttons which resets the header section on every click.
  // The function checks the boolean variable above and uses a ternary operator to display the alternate header.
  function logInOut() {

    // This operator alters the usestate hook above by by re-inserting the same information but with a different boolean.
    // This allows the header componant to know which version to show and have the hook display it.
    isLoggedIn === true ? stateChange(<Header bool={true} onClick={logInOut} />) : stateChange(<Header bool={false} onClick={logInOut} />);

    // The variable is then changed to the opposite boolean that the variable is currently set at.
    isLoggedIn = !isLoggedIn;
  }

  return (
   
    // This section contains the entire page that will be sent to the index to be rendered.
    <div>
    {/* The header is created from the use state above and is called like any other variable */}
      {header}

      {/* The landing page contains the information about the site + the products as due to the design they are intermingled
      and it was easier to merge the 2 into 1. */}
      <Landingpage />

      {/* The footer just contains the copyright information with a function to get the current year. */}
      <Footer />
    </div>
  );
}

// This is then exported to the index.js file.
export default App;

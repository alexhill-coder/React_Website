// Contains a simple footer that is placed at the end of the website.
function Footer() {

  // This variable contains the current year that will automatically be updated.
  const currentYear = new Date().getFullYear();

  return (
    // Uses a bootstrap class to keep the copyright at the bottom of the page.
    <footer className="mt-auto">
      <p className='text-center'>Copyright © {currentYear}</p>
    </footer>
  );
}

// This is then exported to the app file.
export default Footer;

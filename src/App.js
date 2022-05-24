import './css/App.css';
import Startpage from './Startpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fotografie from './Fotografie';
import Bilderbearbeitung from './Bilderbearbeitung';
import Prozeduren from './Prozeduren';
import Video from './Video';

// SDK initialization
const ImageKit = require("imagekit-javascript")
var imagekit = new ImageKit({
  publicKey: "public_QfIM25i70MSQPOR+cJRTKC9iR3U=",
  urlEndpoint: "https://ik.imagekit.io/bfs63i4bbxl",
  authenticationEndpoint: "http://localhost:3001/auth",
});

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={'/'} component={Startpage} />
        <Route exact path={'/home'} component={Startpage} />
        <Route exact path={'/fotografie'} component={Fotografie} />
        <Route exact path={'/bilderbearbeitung'} component={Bilderbearbeitung} />
        <Route exact path={'/prozeduren'} component={Prozeduren} />
        <Route exact path={'/video'} component={Video} />
      </Router>
    </div>
  );
}

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});

export { imagekit };
export default App;


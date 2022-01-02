import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function CharlieBrown(){
  const block = (
    <body onLoad={ScrollToTop}>
      <div className="d-flex flex-column bg-snoopy peanuts-font ">
        <Link to="/plportfolio" className="sticky-top"><Back class="black"/></Link>
        <header id="#top" className="display-2 text-dark text-center">You're a Good Man Charlie Brown</header>
        <div className="charlie-brown-gallery">
          <img className="img-fluid border border-black border-2" src={pictures[1]}/>
          <img className="img-fluid border border-black border-2" src={pictures[0]}/>
        </div>
      </div>
    </body>

  )

  return block;
}

export default CharlieBrown;
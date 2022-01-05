import reactDom from 'react-dom';
import ScrollToElement from '../scripts/toElement';
import {Link} from "react-router-dom";

function Menu(props){
  const menu = (
    <>
      <div className="dropdown">
        <a className={"menu " + props.class} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="material-icons md-48" data-toggle="tooltip" title="menu">
            menu
          </span>
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          
          <li><Link to="/plportfolio" className="dropdown-item">Home</Link></li>
          <li><Link to="/plportfolio/version2" className="dropdown-item">version 2</Link></li>
          <li><Link to="/You're-a-Good-Man-Charlie-Brown" className="dropdown-item">You're a Good Man Charlie Brown</Link></li>
          <li><Link to="/Some-of-My-Best-Friends-are-Smiths" className="dropdown-item">Some of My Best Friends are Smiths</Link></li>
          <li><Link to="/Roald-Dahl's-Willy-Wonka" className="dropdown-item">Roald Dahl's Willy Wonka</Link></li>
          <li><Link to="/Curious-Savage" className="dropdown-item">Curious Savage</Link></li>
          <li><Link to="/The-Sound-of-Music" className="dropdown-item">The Sound of Music</Link></li>
          <li><Link to="/Anatomy-of-Gray" className="dropdown-item">Anatomy of Gray</Link></li>
          <li><Link to="/Don't-Be-Afraid-of-the-Dark" className="dropdown-item">Don't Be Afraid of the Dark</Link></li>
          <li><Link to="/About" className="dropdown-item">About Me</Link></li>
        </ul>
      </div>

    </>
  )

  return menu;
}

export default Menu;
import {React,useState} from 'react';
import './styles/Header/Header.css';
import 'font-awesome/css/font-awesome.min.css';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="title"><span className='books'>Books</span>Reviews</div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#books">Books</a>
          </li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li className="search-icon">
            <a href="#search"><i className="fa fa-search"></i></a>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
    </header>
  );
}

export default Header;

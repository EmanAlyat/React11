import React from 'react';
import './styles/Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>NAVIGATION</h4>
          <ul>
            <li>Home</li>
            <li>Books</li>
            <li>Reviews</li>
            <li>News</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CATEGORIES</h4>
          <ul>
            <li>Art</li>
            <li>Biography</li>
            <li>Business</li>
            <li>Chick Lit</li>
            <li>Children's</li>
            <li>Christian</li>
            <li>Classics</li>
            <li>Comics</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="hidden-title"> ----- </h4>
          <ul>
            <li>Contemporary</li>
            <li>CookBooks</li>
            <li>Crime</li>
            <li>Ebooks</li>
            <li>Fantasy</li>
            <li>Fiction</li>
            <li>Gay and Lesbian</li>
            <li>Graphic Novels</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="hidden-title"> ---- </h4>
          <ul>
            <li>Historical Fiction</li>
            <li>History</li>
            <li>Horror</li>
            <li>Humor and Comedy</li>
            <li>Manga</li>
            <li>Memoir</li>
            <li>Music</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>RSS</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

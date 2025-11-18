import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="link">
          Pai Store
          <FontAwesomeIcon icon={faTags} className="fa-icon" />
        </a>
        <nav className="nav">
          <ul>
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>

            <li>
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Contace
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Login
              </a>
            </li>
            <li>
              <a href="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import logo from "./img/newlogo.png";
import "./Header.css";

function Header() {
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handlePortfolioMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPortfolioHovered(true);
  };

  const handlePortfolioMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPortfolioHovered(false);
    }, 1000); // 1초 후 사라짐
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPortfolioHovered(true);
  };

  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPortfolioHovered(false);
    }, 1000); // 1초 후 사라짐
  };

  const handleOtherMenuHover = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPortfolioHovered(false);
  };

  return (
    <div className="Header">
      <div className="Header-container">
        <div className="Header-body">
          <Navbar.Brand as={Link} to="/" className="logo-area">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="main-nav">
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-item"
                onMouseEnter={handleOtherMenuHover}
              >
                about
              </Nav.Link>
              <div
                className="nav-item portfolio-dropdown"
                onMouseEnter={handlePortfolioMouseEnter}
                onMouseLeave={handlePortfolioMouseLeave}
              >
                <div className="portfolio-toggle">portfolio</div>
                <div
                  className={`portfolio-horizontal-menu ${
                    isPortfolioHovered ? "show" : ""
                  }`}
                  onMouseEnter={handleMenuMouseEnter}
                  onMouseLeave={handleMenuMouseLeave}
                >
                  {[
                    "recent",
                    "magazine",
                    "report",
                    "brochure",
                    "book",
                    "goods",
                    "promotion",
                    "online contents",
                    "others",
                  ].map((item, idx) => (
                    <Link key={idx} to="/sample">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <Nav.Link
                as={Link}
                to="/sample"
                className="nav-item project-list"
                onMouseEnter={handleOtherMenuHover}
              >
                project list
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sample"
                className="nav-item publication"
                onMouseEnter={handleOtherMenuHover}
              >
                publication
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sample"
                className="nav-item story"
                onMouseEnter={handleOtherMenuHover}
              >
                story
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sample"
                className="nav-item contact"
                onMouseEnter={handleOtherMenuHover}
              >
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </div>
  );
}

export default Header;

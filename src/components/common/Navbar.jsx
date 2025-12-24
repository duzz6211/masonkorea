import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navigationData } from '../../data/navigation';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (menuId) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  const handleMouseEnter = (menuId) => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(menuId);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(null);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">M</span>
          <span className="navbar__logo-text">{navigationData.logo.text}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav">
          <ul className="navbar__menu">
            {navigationData.menuItems.map((item) => (
              <li
                key={item.id}
                className="navbar__menu-item"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`navbar__menu-link ${activeDropdown === item.id ? 'active' : ''}`}
                  onClick={() => handleDropdownToggle(item.id)}
                  aria-expanded={activeDropdown === item.id}
                  aria-haspopup="true"
                >
                  {item.label}
                  {item.children && (
                    <svg className="navbar__menu-arrow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className={`navbar__dropdown ${activeDropdown === item.id ? 'active' : ''}`}>
                    <ul className="navbar__dropdown-list">
                      {item.children.map((child) => (
                        <li key={child.id} className="navbar__dropdown-item">
                          {child.children ? (
                            <div className="navbar__dropdown-group">
                              <span className="navbar__dropdown-title">{child.label}</span>
                              <ul className="navbar__dropdown-sublist">
                                {child.children.map((subChild) => (
                                  <li key={subChild.id}>
                                    <Link to={subChild.href} className="navbar__dropdown-link">
                                      {subChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link to={child.href} className="navbar__dropdown-link">
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Link to={navigationData.ctaButton.href} className="navbar__cta">
          {navigationData.ctaButton.label}
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navigationData.menuItems.map((item) => (
            <div key={item.id} className="navbar__mobile-item">
              <button
                className="navbar__mobile-link"
                onClick={() => handleDropdownToggle(item.id)}
              >
                {item.label}
                {item.children && (
                  <svg className={`navbar__mobile-arrow ${activeDropdown === item.id ? 'active' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              {item.children && (
                <div className={`navbar__mobile-dropdown ${activeDropdown === item.id ? 'active' : ''}`}>
                  {item.children.map((child) => (
                    <div key={child.id}>
                      {child.children ? (
                        <div className="navbar__mobile-group">
                          <span className="navbar__mobile-subtitle">{child.label}</span>
                          {child.children.map((subChild) => (
                            <Link
                              key={subChild.id}
                              to={subChild.href}
                              className="navbar__mobile-sublink"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subChild.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={child.href}
                          className="navbar__mobile-sublink"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to={navigationData.ctaButton.href}
            className="navbar__mobile-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {navigationData.ctaButton.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


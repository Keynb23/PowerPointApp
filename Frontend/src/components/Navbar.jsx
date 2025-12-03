import './Nav.css';

export const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <ul className="Nav-Items">
          {/* Quick Save button - uses the defined button style */}
          <li className="Nav-List-Item">
            <button className="quick-save-btn" role="button">
              <span className="text">Quick Save</span>
            </button>
          </li>
          
          {/* Dropdown Menu Tabs */}
          <li className="Nav-List-Item dropdown-trigger">File</li>
          <li className="Nav-List-Item dropdown-trigger">New</li>
          <li className="Nav-List-Item dropdown-trigger">Preview</li>
          <li className="Nav-List-Item dropdown-trigger">Export</li>
          <li className="Nav-List-Item dropdown-trigger">Settings</li>
          <li className="Nav-List-Item dropdown-trigger">Media</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
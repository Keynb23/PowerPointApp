import { useState, useRef } from 'react'; 
import './Nav.css';

const navMenus = [
  { 
    title: 'File', 
    items: ['New Project', 'Open...', 'Save', 'Save As...', 'Close', 'Delete This Project'],
  },
  { 
    title: 'Edit', 
    items: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste', 'Select All'],
  },
  { 
    title: 'Insert', 
    items: ['New Slide', 'Text Box', 'Image', 'Shape', 'Chart', 'Video', 'Audio', 'Animation'],
  },
  { 
    title: 'View', 
    items: ['Full Screen', 'Slide Sorter', 'Outline View', 'Zoom', 'Grids and Guides', 'B&W Mode'],
  },
  { 
    title: 'Export', 
    items: ['Export as PDF', 'Export as PNG/JPG', 'Export via Email', 'Export via Social Media'],
  },
  { 
    title: 'Help', 
    items: ['Documentation', 'Report Bug', 'About'],
  },
];

const DropdownMenu = ({ items, onClose }) => {
  const handleItemClick = (item) => {
    alert(`Action triggered: ${item}`);
    onClose();
  };

  return (
    <ul className="Dropdown-Menu">
      {items.map((item, index) => (
        <li 
          key={index} 
          className="Dropdown-Item" 
          onClick={() => handleItemClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const OPEN_DELAY_MS = 300; 
const CLOSE_DELAY_MS = 100;

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuTimer = useRef(null); 

  const openDropdown = (title) => {
    clearTimeout(menuTimer.current);

    if (openMenu !== title) {
      menuTimer.current = setTimeout(() => {
        setOpenMenu(title);
      }, OPEN_DELAY_MS);
    }
  };

  const closeDropdown = () => {
    clearTimeout(menuTimer.current);
    menuTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, CLOSE_DELAY_MS);
  };
  
  const closeMenu = () => {
    clearTimeout(menuTimer.current);
    setOpenMenu(null);
  };

  return (
    <nav className="Navbar">
      <ul className="Nav-Items">
        <li className="Nav-List-Item">
          <button className="quick-save-btn" onClick={() => alert("Presentation Saved!")}>
            <span className="text">💾 Quick Save</span>
          </button>
        </li>
        
        {navMenus.map((menu) => (
          <div
            key={menu.title}
            className="dropdown-wrapper"
            onMouseEnter={() => openDropdown(menu.title)}
            onMouseLeave={closeDropdown}
          >
            <li 
              className={`Nav-List-Item dropdown-trigger ${openMenu === menu.title ? 'active' : ''}`}
            >
              {menu.title}
            </li>

            {openMenu === menu.title && (
              <DropdownMenu 
                items={menu.items} 
                onClose={closeMenu}
              />
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
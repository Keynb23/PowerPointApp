// /components/Navbar.jsx
import { useState } from 'react';
import './Nav.css';

// Define the structure and items for each dropdown menu
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
  // Simple handler for menu item click (replace with actual logic later)
  const handleItemClick = (item) => {
    alert(`Action triggered: ${item}`);
    onClose(); // Close the menu after an item is clicked
  };

  return (
    <div className="Dropdown-Menu">
      <ul>
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
    </div>
  );
};

export const Navbar = () => {
  // State to track which menu title is active/open (e.g., 'File', 'Edit', or null)
  const [openMenu, setOpenMenu] = useState(null);

  // Toggle function to open or close a menu
  const toggleMenu = (title) => {
    setOpenMenu(prevTitle => prevTitle === title ? null : title);
  };
  
  // Close function for the DropdownMenu component to call
  const closeMenu = () => {
    setOpenMenu(null);
  };

  return (
    <nav className="Navbar">
      <ul className="Nav-Items">
        
        {/* 1. Quick Save Button (Fixed Item) */}
        <li className="Nav-List-Item">
          <button className="quick-save-btn" role="button" onClick={() => alert("Presentation Saved!")}>
            <span className="text">💾 Quick Save</span>
          </button>
        </li>
        
        {/* 2. Dropdown Menu Tabs (Dynamic) */}
        {navMenus.map((menu) => (
          <li 
            key={menu.title} 
            className={`Nav-List-Item dropdown-trigger ${openMenu === menu.title ? 'active' : ''}`}
            onClick={() => toggleMenu(menu.title)}
          >
            {menu.title}
            
            {/* Render the DropdownMenu component if this menu is active */}
            {openMenu === menu.title && (
              // If menu is closed before clicking Save, Save As, or Quick Save, then a pop up will appear 
              // asking the users if they want to save, Save As, or "I don't want to save"
              <DropdownMenu items={menu.items} onClose={closeMenu} />
            )}
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Navbar;
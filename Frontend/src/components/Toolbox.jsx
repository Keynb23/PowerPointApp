// /components/Toolbox.jsx

import { useState } from 'react';
import './Tools.css';
import { 
    FaPlus, FaTrash, FaCopy, FaPaste, FaPalette, FaObjectGroup, 
    FaMagic, FaPlayCircle, FaAlignLeft, FaSquare, FaImage, FaCaretDown 
} from 'react-icons/fa';

// --- Dropdown Menu Data ---
const dropdownMenus = { 
    // TEMPLATES / THEMES
    theme: [
        { name: 'Minimalist White', action: () => alert('Applying Minimalist White Theme') },
        { name: 'Dark Professional', action: () => alert('Applying Dark Professional Theme') },
        { name: 'Creative Gradient', action: () => alert('Applying Creative Gradient Theme') },
        { name: 'Corporate Blue', action: () => alert('Applying Corporate Blue Theme') },
    ],
    // GROUPING AND LAYERING
    group: [
        { name: 'Group Selected Items', action: () => alert('Grouping selected elements, slides, effects, etc.') },
        { name: 'Ungroup Selected Items', action: () => alert('Ungrouping selected elements') },
        { name: 'Bring to Front (Layer)', action: () => alert('Moving layer to front') },
        { name: 'Send to Back (Layer)', action: () => alert('Moving layer to back') },
    ],
    // TRANSITIONS
    transition: [
        { name: 'None', action: () => alert('Transition set to None') },
        { name: 'Common: Fade', action: () => alert('Applying Fade Transition') },
        { name: 'Common: Push', action: () => alert('Applying Push Transition') },
        { name: 'Common: Wipe', action: () => alert('Applying Wipe Transition') },
        { name: 'Unique: Cube', action: () => alert('Applying Cube Transition') },
        { name: 'Unique: Door', action: () => alert('Applying Door Transition') },
    ],
    // ANIMATIONS
    animation: [
        { name: 'None', action: () => alert('Animation set to None') },
        { name: 'Entrance: Fly In', action: () => alert('Applying Fly In Animation') },
        { name: 'Entrance: Zoom', action: () => alert('Applying Zoom Animation') },
        { name: 'Emphasis: Pulse', action: () => alert('Applying Pulse Animation') },
        { name: 'Emphasis: Spin', action: () => alert('Applying Spin Animation') },
        { name: 'Exit: Fade Out', action: () => alert('Applying Fade Out Animation') },
    ],
    // ALIGNMENT
    align: [
        { name: 'Align Text Left', action: () => alert('Text aligned Left') },
        { name: 'Align Text Center', action: () => alert('Text aligned Center') },
        { name: 'Align Text Right', action: () => alert('Text aligned Right/End') },
        { name: 'Justify Text', action: () => alert('Text Justified') },
        { name: '---', type: 'separator' }, 
        { name: 'Align Objects to Slide Center', action: () => alert('Objects Centered on Slide') },
    ],
    // SHAPES
    shape: [
        { name: 'Insert Square', action: () => alert('Inserting Square Shape') },
        { name: 'Insert Circle', action: () => alert('Inserting Circle Shape') },
        { name: 'Insert Triangle', action: () => alert('Inserting Triangle Shape') },
        { name: 'Insert Star', action: () => alert('Inserting Star Shape') },
        { name: 'Insert Heart', action: () => alert('Inserting Heart Shape') },
    ],
    // IMAGE INSERTION
    image: [
        { name: 'Search File Explorer...', action: () => alert('Opening File Explorer to select image') },
        { name: 'Insert from URL', action: () => alert('Prompting for Image URL') },
        { name: 'Take Screenshot', action: () => alert('Activating Screenshot Tool') },
    ],
};

// --- Core Tools Definition ---
const coreTools = [
    { id: 'addSlide', name: 'Add Slide', icon: FaPlus, action: () => alert('New Slide Added'), type: 'button' },
    { id: 'copySlide', name: 'Copy Slide', icon: FaCopy, action: () => alert('Slide Copied'), type: 'button' }, 
    { id: 'pasteSlide', name: 'Paste Slide', icon: FaPaste, action: () => alert('Slide Pasted'), type: 'button' }, 
    { id: 'deleteSlide', name: 'Delete Slide', icon: FaTrash, action: () => alert('Slide Deleted'), type: 'button' },
    
    { id: 'theme', name: 'Themes', icon: FaPalette, type: 'dropdown' },
    { id: 'group', name: 'Group Objects', icon: FaObjectGroup, type: 'dropdown' },
    { id: 'transition', name: 'Slide Transitions', icon: FaMagic, type: 'dropdown' },
    { id: 'animation', name: 'Element Animations', icon: FaPlayCircle, type: 'dropdown' },
    { id: 'align', name: 'Align Text', icon: FaAlignLeft, type: 'dropdown' },
    { id: 'shape', name: 'Insert Shape', icon: FaSquare, type: 'dropdown' },
    { id: 'image', name: 'Insert Image', icon: FaImage, type: 'dropdown' },
];


// --- ToolDropdown Component ---
const ToolDropdown = ({ items, onClose }) => { 
    return (
        // e.stopPropagation() is correctly placed here to prevent closing when clicking inside the menu
        <div className="Tool-Dropdown-Menu" onClick={(e) => e.stopPropagation()}>
            <ul className="Tool-Dropdown-List">
                {items.map((item, index) => (
                    item.type === 'separator' 
                        ? <li key={index} className="Tool-Dropdown-Separator" />
                        : (
                            <li 
                                key={index} 
                                className="Tool-Dropdown-Item" 
                                onClick={() => {
                                    item.action();
                                    onClose();
                                }}
                            >
                                {item.name}
                            </li>
                        )
                ))}
            </ul>
        </div>
    );
};

// --- Toolbox Main Component ---
export const Toolbox = ({ userFavorites = [] }) => {
    const toolsToDisplay = userFavorites.length > 0 ? userFavorites : coreTools;
    const [openDropdown, setOpenDropdown] = useState(null); 

    const toggleDropdown = (id, event) => {
        // Stop propagation here to prevent the Wrapper's onClick from immediately closing the menu
        if (event) {
            event.stopPropagation();
        }
        setOpenDropdown(prevId => prevId === id ? null : id);
    };

    const handleCloseDropdown = () => {
        setOpenDropdown(null);
    };

    return (
        // The wrapper closes the menu when clicking *outside* the toolbar area
        <div className="Tool-Bar-Wrapper" onClick={handleCloseDropdown}>
            <div className="Tool-Bar" onClick={(e) => e.stopPropagation()}> 
                {/* Stop propagation here too, so clicking the toolbar itself doesn't close the menu */}
                <div className="Tool-Items">
                    {toolsToDisplay.map(tool => (
                        <div 
                            key={tool.id} 
                            className={`Tool-Item-Container ${tool.type}`}
                        >
                            <button 
                                className={`Tool-Button ${tool.type === 'dropdown' && openDropdown === tool.id ? 'active' : ''}`} 
                                title={tool.name} 
                                // Pass the event object to toggleDropdown for stopping propagation
                                onClick={tool.type === 'button' 
                                    ? tool.action 
                                    : (e) => toggleDropdown(tool.id, e) 
                                }
                            >
                                <tool.icon size={20} />
                                {tool.type === 'dropdown' && <FaCaretDown size={10} className="Dropdown-Caret" />}
                            </button>

                            {/* Conditional rendering is correct */}
                            {tool.type === 'dropdown' && openDropdown === tool.id && (
                                <ToolDropdown 
                                    items={dropdownMenus[tool.id]}
                                    onClose={handleCloseDropdown}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Toolbox;
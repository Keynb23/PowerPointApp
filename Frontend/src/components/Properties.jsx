import { useState } from 'react';
import './Prop.css';
import {
    FaFileAlt, FaPaintBrush, FaFont, FaImage, FaCube, FaMagic, 
    FaPlayCircle, FaCog, FaPalette,
} from 'react-icons/fa';

// --- IMPORT ALL MODULAR PANEL COMPONENTS ---
import PresentationPanel from './PropertiesPanels/PresentationPanel';
import ColorGradingPanel from './PropertiesPanels/ColorGradingPanel';
import SlideFormatPanel from './PropertiesPanels/SlideFormatPanel';
import TextPanel from './PropertiesPanels/TextPanel';
import MediaPanel from './PropertiesPanels/MediaPanel';
import ShapePanel from './PropertiesPanels/ShapePanel';
import TransitionsPanel from './PropertiesPanels/TransitionsPanel';
import AnimationsPanel from './PropertiesPanels/AnimationsPanel';
import SettingsPanel from './PropertiesPanels/SettingsPanel';


// Define the structure for each tab/section
const propertiesTabs = [
    // Reworked structure: 'Component' now holds the imported React component
    { id: 'presentation', icon: FaFileAlt, name: 'Presentation', Component: PresentationPanel },
    { id: 'colorGrading', icon: FaPalette, name: 'Color Grading', Component: ColorGradingPanel },
    { id: 'slide', icon: FaPaintBrush, name: 'Slide Format', Component: SlideFormatPanel },
    { id: 'text', icon: FaFont, name: 'Text', Component: TextPanel },
    { id: 'media', icon: FaImage, name: 'Media/Image', Component: MediaPanel },
    { id: 'shape', icon: FaCube, name: 'Shape', Component: ShapePanel },
    { id: 'transitions', icon: FaMagic, name: 'Transitions', Component: TransitionsPanel },
    { id: 'animations', icon: FaPlayCircle, name: 'Animations', Component: AnimationsPanel },
    { id: 'settings', icon: FaCog, name: 'Settings', Component: SettingsPanel },
];

export const Properties = () => {
    // State to track the currently active tab ID, defaults to the first one
    const [activeTab, setActiveTab] = useState(propertiesTabs[0].id);

    // Find the data object for the active tab to get the name and Component
    const activePanelData = propertiesTabs.find(tab => tab.id === activeTab);
    // Destructure the component out of the data object
    const ActivePanelComponent = activePanelData ? activePanelData.Component : null; 

    return (
        <div className="Properties-Menu">
            {/* 1. Icon/Tab Selection Column */}
            <div className="Properties-Tabs">
                {propertiesTabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`Properties-Tab-Icon ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                        title={tab.name}
                    >
                        <tab.icon size={24} />
                    </div>
                ))}
            </div>

            {/* 2. Main Panel Content Area */}
            <div className="Properties-Panel-Content">
                <h3 className="Panel-Title">{activePanelData ? activePanelData.name : 'Unknown'} Properties</h3>
                
                {/* Dynamically render the selected panel component */}
                <div className="Properties-Item-List">
                    {ActivePanelComponent && <ActivePanelComponent />}
                </div>
            </div>
        </div>
    );
};

export default Properties;
import React from 'react';
import '../Prop.css'; // Requested import

const ColorGradingPanel = () => {
    return (
        <div className="Panel-Content-Container">
            <p>
                **Color Grading:** Adjust color schemas for components, slides, and the whole project.
            </p>
            <hr />
            <p className="Placeholder-Control">
                Theme and Palettes:
            </p>
            <ul className="Control-List">
                <li>Primary Color: [Color Picker]</li>
                <li>Accent Color: [Color Picker]</li>
                <li>Background Color: [Color Picker/Gradient Selector]</li>
                <li>Apply to: [Radio Buttons: Selected Slide / All Slides]</li>
            </ul>
        </div>
    );
};

export default ColorGradingPanel;
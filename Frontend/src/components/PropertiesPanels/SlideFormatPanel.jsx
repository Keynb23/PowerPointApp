import React from 'react';
import '../Prop.css'; // Requested import

const SlideFormatPanel = () => {
    return (
        <div className="Panel-Content-Container">
            <p>
                **Slide Format:** Adjust background color, image, and overall master layout of the current slide.
            </p>
            <hr />
            <p className="Placeholder-Control">
                Background & Layout:
            </p>
            <ul className="Control-List">
                <li>Background Fill: [Dropdown: Solid, Gradient, Image]</li>
                <li>Master Layout: [Template Picker/Dropdown]</li>
                <li>Visibility: [Toggle Hide Background Objects]</li>
                <li>Apply Changes: [Button: Apply to Selected/All Slides]</li>
            </ul>
        </div>
    );
};

export default SlideFormatPanel;
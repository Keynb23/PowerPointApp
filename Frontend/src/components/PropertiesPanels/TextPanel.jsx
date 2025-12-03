import React from 'react';
import '../Prop.css'; // Requested import

const TextPanel = () => {
    return (
        <div className="Panel-Content-Container">
            <p>
                **Text Formatting:** Control font family, size, color, lists, line heights, and paragraph spacing for selected text.
            </p>
            <hr />
            <p className="Placeholder-Control">
                Typography Controls:
            </p>
            <ul className="Control-List">
                <li>Font Family: [Dropdown Menu]</li>
                <li>Font Size: [Number Input / Slider]</li>
                <li>Color: [Color Picker]</li>
                <li>Line Height (Spacing): [Slider]</li>
                <li>Lists: [Icon Buttons: Bullet, Numbered, None]</li>
            </ul>
        </div>
    );
};

export default TextPanel;
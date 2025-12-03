import React from 'react';
import '../Prop.css'; // Requested import

const ShapePanel = () => {
    return (
        <div className="Panel-Content-Container">
            <p>
                **Shape Settings:** Edit fill by color or media, border style, shadow, and geometry of the selected shape.
            </p>
            <hr />
            <p className="Placeholder-Control">
                Appearance and Geometry:
            </p>
            <ul className="Control-List">
                <li>Fill: [Color Picker]</li>
                <li>Border Weight: [Slider/Input]</li>
                <li>Corner Radius: [Slider/Input]</li>
                <li>Shadow: [Toggle/Settings Button]</li>
            </ul>
        </div>
    );
};

export default ShapePanel;
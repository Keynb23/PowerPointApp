import '../Prop.css';


const ShapePanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Shape Settings:** Edit fill by color or media, border style, shadow, and geometry of the selected shape.
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Appearance and Geometry:
            </p>
            <ul className="Prop-Panel-Tabs-List">
                <li>Fill: [Color Picker]</li>
                <li>Border Weight: [Slider/Input]</li>
                <li>Corner Radius: [Slider/Input]</li>
                <li>Shadow: [Toggle/Settings Button]</li>
            </ul>
        </div>
    );
};

export default ShapePanel;
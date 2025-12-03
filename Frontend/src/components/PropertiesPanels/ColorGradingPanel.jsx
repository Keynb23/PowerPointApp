import '../Prop.css';


const ColorGradingPanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Color Grading:** Adjust color schemas for components, slides, and the whole project.
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Theme and Palettes:
            </p>
            <ul className="Prop-Panel-Tabs-List">
                <li>Primary Color: [Color Picker]</li>
                <li>Accent Color: [Color Picker]</li>
                <li>Background Color: [Color Picker/Gradient Selector]</li>
                <li>Apply to: [Radio Buttons: Selected Slide / All Slides]</li>
            </ul>
        </div>
    );
};

export default ColorGradingPanel;
import '../Prop.css';


const TextPanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Text Formatting:** Control font family, size, color, lists, line heights, and paragraph spacing for selected text.
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Typography Controls:
            </p>
            <ul className="Prop-Panel-Tabs-List">
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
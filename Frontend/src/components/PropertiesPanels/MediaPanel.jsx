import '../Prop.css';


const MediaPanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Media/Image:** Manage crop, scale, rotation, and applied visual filters for the selected image or video.
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Transform & Filters:
            </p>
            <ul className="Prop-Panel-Tabs-List">
                <li>Crop Tool: [Button/Toggle]</li>
                <li>Rotation: [Slider/Input: 0-360 degrees]</li>
                <li>Opacity: [Slider: 0% - 100%]</li>
                <li>Filters: [Dropdown: Sepia, Grayscale, Blur, None]</li>
            </ul>
        </div>
    );
};

export default MediaPanel;
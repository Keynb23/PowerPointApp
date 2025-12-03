import '../Prop.css';


const TransitionsPanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Transitions:** Select and configure the slide-to-slide transition (how the next slide appears).
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Transition Type & Timing:
            </p>
            <ul className="Prop-Panel-Tabs-List">
                <li>Effect: [Dropdown Menu: Fade, Cube, Push, etc.]</li>
                <li>Duration: [Input Field: in seconds]</li>
                <li>Direction: [Radio Buttons: Left, Right, Up, Down]</li>
                <li>Trigger: [Dropdown: On Click, After Delay]</li>
            </ul>
        </div>
    );
};

export default TransitionsPanel;
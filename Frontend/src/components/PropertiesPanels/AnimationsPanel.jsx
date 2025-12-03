import '../Prop.css';


const AnimationsPanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Animations:** Define element entrance, emphasis, hover, clicking, other triggers, and exit animations for the selected object.
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Animation Sequence:
            </p>
            <ul className="Prop-Panel-Tabs-List">
                <li>Entrance: [Dropdown: Fly In, Zoom]</li>
                <li>Emphasis: [Dropdown: Pulse, Spin]</li>
                <li>Exit: [Dropdown: Fade Out, Shrink]</li>
                <li>Order/Timing: [List View of Animations]</li>
            </ul>
        </div>
    );
};

export default AnimationsPanel;
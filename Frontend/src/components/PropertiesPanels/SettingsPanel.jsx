import '../Prop.css';

const SettingsPanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Application Settings:** Configure application-wide preferences, user profile, and export options.
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Global Preferences:
            </p>
            <ul className="Prop-Panel-Tabs-List">
                <li>Dark Mode: [Toggle Switch]</li>
                <li>Auto-Save Interval: [Dropdown]</li>
                <li>Export Quality: [Dropdown: Low, Medium, High]</li>
                <li>Keyboard Shortcuts: [View/Edit Button]</li>
            </ul>
        </div>
    );
};

export default SettingsPanel;
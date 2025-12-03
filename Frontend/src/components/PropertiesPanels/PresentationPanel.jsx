import '../Prop.css';


const PresentationPanel = () => {
    return (
        <div className="Prop-Panel-Tabs-Container">
            <p>
                **Presentation Details:** Set overall document properties, title, author, and global slide size.
            </p>
            <hr />
            <p className="Prop-Panel-Tabs-Control">
                Project Metadata & Sizing:
            </p>
            <ul className="Prop-Panel-Tabs-List">
                <li>Document Title: [Input Field]</li>
                <li>Author Name: [Input Field]</li>
                <li>Aspect Ratio: [Dropdown 16:9, 4:3, Custom]</li>
                <li>Default Font Family: [Dropdown]</li>
            </ul>
        </div>
    );
};

export default PresentationPanel;
import '../Prop.css'; // Requested import

const PresentationPanel = () => {
    return (
        <div className="Panel-Content-Container">
            <p>
                **Presentation Details:** Set overall document properties, title, author, and global slide size.
            </p>
            <hr />
            <p className="Placeholder-Control">
                Project Metadata & Sizing:
            </p>
            <ul className="Control-List">
                <li>Document Title: [Input Field]</li>
                <li>Author Name: [Input Field]</li>
                <li>Aspect Ratio: [Dropdown 16:9, 4:3, Custom]</li>
                <li>Default Font Family: [Dropdown]</li>
            </ul>
        </div>
    );
};

export default PresentationPanel;
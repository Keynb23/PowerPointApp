// /components/Properties.jsx
// Properties Menu Component (Right Side of Viewport), with placeholder items.
// Each "Properties-Item-List" can be expanded later with actual functionality,
// such as adjusting slide properties, text formatting, image settings, etc.
// For now, it contains placeholder menu items to illustrate the layout. 
// Basically each item is a tab or section in the properties panel.

import "./Prop.css";

export const Properties = () => {
  return (
    <>
      <div className="Properties-Menu">
        <div className="Properties-Items">
          {/* Each "Properties-Item-List" is a menu section */}
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 1</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 2</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 3</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 4</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 5</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 6</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 7</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 8</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 9</p>
          </ul>
          <ul className="Properties-Item-List">
            <p>Menu Item Placeholder 10</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Properties;
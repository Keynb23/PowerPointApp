import './Tools.css';

export const Toolbox = () => {
  return (
    <>
      <div className="Tool-Bar">
        {/* Some of these will be hard coded, others will be favorites selected by users
          depending on what they use the most */}
        <li className="Tool-Items">
          <h4 className="Tool-Bar-Title">Quick Effects</h4>
          {/* not sure what items would go here yet. Placeholder stuff for now.
            some of this stuff feels more like main navbar stuff.*/}
          <ul className="Tool-Item-List">
            <ul className="Tools">Add Slide</ul>
            <ul className="Tools">Remove Slide</ul>
            <ul className="Tools">Themes</ul>
            <ul className="Tools">Transitions</ul>
            <ul className="Tools">Animations</ul>
            <ul className="Tools">Insert</ul>
            <ul className="Tools">View</ul>
            <ul className="Tools">Help</ul>
          </ul>
        </li>
      </div>
    </>
  );
};

export default Toolbox;

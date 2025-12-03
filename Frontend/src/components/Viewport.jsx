import "./Viewport.css";

export const Viewport = () => {
  return (
    <>
      <div className="Viewport">
        {/* This is the main canvas area where the current slide is displayed */}
        <div className="Slide-Stage">
          {/* Example content for the new slide */}
          <h1 className="TitleH">PowerPoint App - Slide 1</h1>
          <p className="SubtitleP">Click on the slide to add elements.</p>
          <button id="btn" className="startbtn">
            Add Text Block
          </button>
        </div>
      </div>
    </>
  );
};

export default Viewport;
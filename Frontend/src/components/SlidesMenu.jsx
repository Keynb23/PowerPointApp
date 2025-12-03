import { useState } from "react";
import "./Slides.css";

export const SlidesMenu = () => {
  // State to manage the list of slides (using unique IDs for keys)
  const [slides, setSlides] = useState([]);
  // State to manage which slide is currently active/selected
  const [activeSlide, setActiveSlide] = useState(null);

  const addSlide = () => {
    const newSlideId = Date.now();
    setSlides((prevSlides) => {
      // Add the new slide to the list
      const newSlides = [...prevSlides, newSlideId];
      // Automatically select the new slide
      setActiveSlide(newSlideId);
      return newSlides;
    });
  };

  const selectSlide = (slideId) => {
    setActiveSlide(slideId);
  };

  // Content for the initial "Add Slide" box if the list is empty
  const initialAddButton = (
    <div className="slide-prev-box">
      <button id="btn" className="Add-Slide-Box" onClick={addSlide}>
        Click to add new
      </button>
    </div>
  );

  return (
    <>
      <div className="Slide-Menu">
        <h3 className="Slide-Menu-Title">Slides ({slides.length} total)</h3>
        <div className="Slide-List">
          {/* If there are no slides, show a large initial prompt/button */}
          {slides.length === 0 && initialAddButton}

          {/* Map over the slides array to render previews */}
          {slides.map((slideId, index) => (
            <div
              key={slideId}
              className={`slide-prev-box ${activeSlide === slideId ? 'active' : ''}`}
              onClick={() => selectSlide(slideId)}
            >
              {/* This inner div mimics the slide content area */}
              <div className="new-slide-div-class">
                {/* Displaying index + 1 for user-friendly numbering */}
                Slide {index + 1}
              </div>
            </div>
          ))}

          {/* Add Slide button visible below the list when slides exist */}
          {slides.length > 0 && (
            <button className="Add-Slide-Box" onClick={addSlide} style={{ margin: '0.5rem auto' }}>
              + Add New Slide
            </button>
          )}

        </div>
      </div>
    </>
  );
};

export default SlidesMenu;
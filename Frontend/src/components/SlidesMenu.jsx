import { useState } from "react";
import "./Slides.css";

export const SlidesMenu = () => {
  const [slides, setSlides] = useState([]);
  const addSlide = () => {
    const newSlideId = Date.now();
    setSlides((prevSlides) => [...prevSlides, newSlideId]);
  };

  return (
    <>
      <div className="Slide-Menu">
        <h3 className="Slide-Menu-Title">Slides</h3>
        <div className="Slide-List">
          <div className="slide-prev-box">
            <button id="btn" className="Add-Slide-Box" onClick={addSlide}>
              Click to add new
            </button>
          </div>

          {slides.map((slideId, index) => (
            <div key={slideId} className="new-slide-div-class">
              Slide Preview {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlidesMenu;

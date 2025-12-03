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

 // Removed initialAddButton content as the primary button will always be visible.

 return (
  <>
   <div className="Slide-Menu">
    <h3 className="Slide-Menu-Title">Slides ({slides.length} total)</h3>
    
    {/* 1. Slide-List: This is the container that will scroll (flex-grow: 1) */}
    <div className="Slide-List">
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
    </div>

    {/* 2. Add Slide Button: Stays fixed at the bottom (flex-shrink: 0) */}
    <button 
     className="Add-Slide-Box" 
     onClick={addSlide}
    >
     {slides.length === 0 ? "Click to add new" : "+ Add New Slide"}
    </button>

   </div>
  </>
 );
};

export default SlidesMenu;
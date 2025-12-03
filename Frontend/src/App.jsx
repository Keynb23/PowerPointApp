import "./App.css";
import Viewport from "./components/Viewport";
import Toolbox from "./components/Toolbox"; 
import SlidesMenu from "./components/SlidesMenu"; 
import Properties from "./components/Properties";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    {/* Navbar import (above app container)  */}
      <Navbar/>
      <div className="App-Container">
        {/* Toolbar import (above viewport) */}
        <div className="appToolbox">
          <Toolbox />
        </div>

        {/* Slides Menu Import (left of viewport) */}
        <div className="appSlides">
          <SlidesMenu />
        </div>

        {/* viewport import (center) */}
          <div className="appViewport">
          <Viewport />
          </div>
      
        {/* Properties Import (to right of viewport) */}
          <div className="appProperties">
          <Properties />
          </div>
      </div>
    </>
  );
}

export default App;

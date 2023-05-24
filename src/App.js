import { useState } from 'react';
import './App.css';
import youtube from './apis/youtube';
import Searchbar from './Components/Searchbar';
import Display from './Components/Display.js';
import DisplayMain from './Components/DisplayMain';
function App() {


  let [videos, setVideos] = useState([]);

  let [choosenvideos, setChoosenVideos] = useState(null);

  console.log(choosenvideos);



  return (
    <>
      <Searchbar setvid={setVideos}></Searchbar>


      <div className="videocontainer">
        <div className="primary-video">
          <DisplayMain choosenvideos={choosenvideos==null? videos[0]:choosenvideos}></DisplayMain>
        </div>
        <div className="rest-videos">
          <Display videos={videos} setChoosenVideos = {setChoosenVideos}></Display>
        </div>
      </div>

    </>
  );
}

export default App;



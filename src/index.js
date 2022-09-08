import React from "react";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import "./styles/style.css";
import {BrowserRouter as Router,
  Routes ,
Route,
Link
} from "react-router-dom";
import Bio from './pages/bio'
import About from './pages/About'
import Third from './pages/third'
import Second from "./pages/second";
const PREFIX_URL = '../static/';
const ImagesGallery = () => {
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;
   
    const call =  () => {
      let images = [];
      // const response = await axios.get(
      //   "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
      // );
      if (!shouldCancel ) {
        // setImages(
        //   response.data.map(url => ({
        //     original: `${url}=w1024`,
        //     thumbnail: `${url}=w100`
        //   }))
        // );
        // for (let i = 2; i < 12; i++) {
        //         images.push({
        //     original: `${PREFIX_URL}${i}.jpg`,
        //     thumbnail:`${PREFIX_URL}${i}t.jpg`
        //   });
   
        // }
        setImages(images);
      }
      
    

    };
    call();

    return () => (shouldCancel = true);
  }, []);
  return images ? 
  <div>
  <Router>
  <div className="App">
    <nav>
      <ul>
      <li>
          <Link to="/About">تماس با ما</Link>
        </li>
    
        <li>
          <Link to="/third">آثار نمایشگاه دوم</Link>
        </li>
        <li>
          <Link to="/second">آثار نمایشگاه اول</Link>
        </li>
        <li>
          <Link to="/">خانه</Link>
        </li>
      </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
  <Routes >

  <Route path="/third" element={<Third />} />
  <Route path="/second" element={<Second />} />
      <Route path="/About" element={<About />} /> 
      <Route path="/Bio" element={<Bio />} /> 
    </Routes > 
  </div>
</Router>

 < ImageGallery items={images} /> 
 </div>
 : null;


};

const rootElement = document.getElementById("root");
ReactDOM.render(<ImagesGallery />, rootElement);

import React, { useState,Component, Suspense, lazy } from "react";

import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.js';
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
import First from "./pages/first";
import ImageSelectList from "./pages/forth";
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

    const {t,i18n  } = useTranslation();
    const [selectedLang, setSelectedLang] = useState('fa');
   
    const changeLanguage = (event) => {
      setSelectedLang(event.target.value);
      i18n.changeLanguage(event.target.value);
    }
    // const changeLanguage = lng => {
    //   i18n.changeLanguage(lng);
    // };

  return images ? 
  <div>
     <div onChange={changeLanguage}>
     <label >
        <input type="radio" value="fa" name="language" checked={selectedLang === 'fa'} /> Farsi</label>
        <label >
      <input type="radio" value="en" name="language" checked={selectedLang === 'en'} />English </label>
     
    </div>

{/* <div className="App">
      <div className="App-header">
        <button onClick={() => changeLanguage('fa')}>fa</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
      <div>{t('Home1')}</div>
    </div> */}

  <Router>
  <div className="App">
    <nav>
      <ul>
      <li>
          <Link to="/About">{t('ContactUs')}</Link>
        </li>
        <li>
          <Link to="/imageList">{t('NFT')}</Link>
        </li>
   
        <li>
          <Link to="/second">{t('FirstExhibition')}</Link>
        </li>
        <li>
          <Link to="/first">{t('Home1')}</Link>
        </li>
      </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Suspense fallback={<div>Loading...</div>}>
  <Routes >
  <Route index element={<First />} />
  <Route path="/first" element={<First />} />
  <Route path="/third" element={<Third />} />
  <Route path="/second" element={<Second />} />
      <Route path="/About" element={<About />} /> 
      <Route path="/Bio" element={<Bio />} /> 
      <Route path="/imageList" element={<ImageSelectList />} /> 
    </Routes > 
    </Suspense>
  </div>
</Router>

 </div>
 : null;

};

const rootElement = document.getElementById("root");
ReactDOM.render(<ImagesGallery />, rootElement);

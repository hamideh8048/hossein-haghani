import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../styles/style.css";
const PREFIX_URL = '../siyah2/';
const Third = () => {
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
        for (let i = 2; i < 12; i++) {
                images.push({
            original: `${PREFIX_URL}${i}.jpg`,
            thumbnail:`${PREFIX_URL}${i}t.jpg`
          });
   
        }
        setImages(images);
      }
      
    

    };
    call();

    return () => (shouldCancel = true);
  }, []);
  return images ? 
  < ImageGallery items={images} /> 
 
 : null;

 
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ImagesGallerySecond />, rootElement);
export default Third;
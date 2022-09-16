import React from "react";
import ProductList from "./ProductList";
var data = [
  {
    id:1,
    url: "http://fakeimg.pl/200/?text=img1",
    name: "img1"
  },
  {
    id:2,
    url: "http://fakeimg.pl/200/?text=img2",
    name: "img2"
  },
  {
    id:3,
    url: "http://fakeimg.pl/200/?text=img3",
    name: "img3"
  },
  {
    id:4,
    url: "http://fakeimg.pl/200/?text=img4",
    name: "img4"
  },
  {
    id:53.3,
    url: "http://fakeimg.pl/200/?text=img5",
    name: "img5"
  }
]
function ImageSelectList() {
 
  return (
    <div>
       <ProductList />

    </div>
  );
}
// var ImageList = require('react-image-list');

// var ImageSelectList = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <ImageList imageData={data}
//                     wrapperClass="wrapper"
//                     gridClass="col-md-3"
//                     imgClass="responsive"/>
//       </div>
//     )
//   }
// })
export default ImageSelectList;
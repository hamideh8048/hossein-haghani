import React from "react";
import { productList } from "../imagejsonlist";
import Modal from "react-modal";
import Pagination from "../Pagination";
import "../styles/style.css";


class ProductList extends React.Component {
 

  constructor(props) {
    super(props);

    this.state = {

      productDataList: [],
      modalIsOpen: false,
      name:'',
      size:'',
      url:'',
      isOpen: false
    };
  }


  onChangePage = pageOfItems => {
    this.setState({
      productDataList: pageOfItems,
      modalIsOpen: false,
   
    });
  };
  
 
  openModal(someValue) { // called repeatedly
    this.setState({ modalIsOpen: true });
    this.setState({ name: someValue.name});
    this.setState({ size: someValue.size});
    this.setState({ url: someValue.url});
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false ,
    });
  };
  render() {
    const { productDataList } = this.state;

    const modalStyle = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.85)"
      },
      content: {
        position: "absolute",
        top: "8rem",
        left: "20rem",
        right: "20rem",
        bottom: "7rem",
        backgroundColor: "paleturquoise",
        borderRadius: "1rem",
        padding: "1.5rem"
      }
    };
  
    Modal.setAppElement("#root");
    return (
      <div>
      
        {productDataList.map(item => (
        <div>
        <img  src={item.url} alt="caligraphy"  class="center"></img>
    
        <a  className="read-more-link" onClick={()=>this.openModal(item)}><h3>{'اطلاعات بیشتر'}</h3></a>
    <Modal   isOpen={this.state.modalIsOpen}  onRequestClose={this.closeModal} style={modalStyle}  overlayClassName="myoverlay"
        closeTimeoutMS={500}>
   
<div className="detail">
     <img src="./static/close.png" alt="my image" className="close" onClick={this.closeModal} />
      <div>
      <img  src={this.state.url} alt="caligraphy"  class="centerdetail"></img></div>
      <div className="child">{this.state.name}</div> 
      <br></br>
    
      <br></br><br></br>
      <div>ابعاد:  {this.state.size}</div> 
        </div>
    </Modal>
 

</div>
      )
      )}

    <div class="center" >
        <Pagination
          pageSize={4}
          items={productList}
          onChangePage={this.onChangePage}
        />
        </div>
      </div>
    );
  }
}

export default ProductList;

;

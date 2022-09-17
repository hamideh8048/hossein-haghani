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
      isOpen: false
    };
  }


  onChangePage = pageOfItems => {
    this.setState({
      productDataList: pageOfItems,
      modalIsOpen: false,
      item:[]
    });
  };
  
  // openModal = () => {
  //   this.setState({ modalIsOpen: true });
  //   this.setState({ name: 'a'});
  // };
  openModal(someValue) { // called repeatedly
    this.setState({ modalIsOpen: true });
    this.setState({ name: someValue});
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
        top: "5rem",
        left: "5rem",
        right: "5rem",
        bottom: "5rem",
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
    
        <a  className="read-more-link" onClick={()=>this.openModal(item.name)}><h3>{'اطلاعات بیشتر'}</h3></a>
    <Modal   isOpen={this.state.modalIsOpen}  onRequestClose={this.closeModal} style={modalStyle}  overlayClassName="myoverlay"
        closeTimeoutMS={500}>
   

      <button onClick={this.closeModal}>close</button>
      <div>{this.state.name}</div>
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

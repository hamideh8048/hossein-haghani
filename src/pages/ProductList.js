import React from "react";
import { productList } from "../imagejsonlist";

import Pagination from "../Pagination";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDataList: []
    };
  }

  onChangePage = pageOfItems => {
    this.setState({
      productDataList: pageOfItems
    });
  };

  render() {
    const { productDataList } = this.state;

    return (
      <div>
  
    
          {productDataList.map(item => (
    
  <div>
        <img  src={item.url} alt="caligraphy"  class="center"></img>
<br></br>
</div>
      ))}

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

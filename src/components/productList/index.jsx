import React from "react";
import { withStore } from "../../state/withStore";
import { Product } from "../product";
import "./product-list.scss";
import {ADD_PRODUCT, REMOVE_PRODUCT} from "../../state/stores/ProductsStore";
import { AddProductForm } from "../productForm";
import { ModalWindow } from "../modalWindow";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openForm: false,
    };

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.showProductForm = this.showProductForm.bind(this);
    this.hideProductForm = this.hideProductForm.bind(this);

  }

  addProduct(product) {
    this.props.dispatch(ADD_PRODUCT, { product });
  }

  removeProduct(id) {
    this.props.dispatch(REMOVE_PRODUCT, { id });
  }

  showProductForm() {
    this.setState({openForm: true});
  }

  hideProductForm() {
    this.setState({openForm: false});
  }

  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
        <ModalWindow
          open={this.state.openForm}
          title="Добавить товар"
          onClose={this.hideProductForm}
        >
          <AddProductForm addProduct={this.addProduct}/>
        </ModalWindow>
        <button onClick={this.showProductForm}>
          &#10010;
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            remove={this.removeProduct}
          />
        ))}
      </div>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);

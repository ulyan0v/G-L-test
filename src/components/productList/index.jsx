import React from "react";
import { withStore } from "../../state/withStore";
import { Product } from "../product";
import "./product-list.scss";
import { REMOVE_PRODUCT } from "../../state/stores/ProductsStore";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct(id) {
    this.props.dispatch(REMOVE_PRODUCT, { id });
  }

  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
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

import React from "react";
import products from "./ProductData";
import ProductInfo from "./ProductInfo";

const ProductList = () => {
  return (
    <>
      <h1> Product List </h1>
        {
            products.map((productItem) => (
                <ProductInfo key={productItem.id} product={productItem}/>
            ))
        }
    </>
  );
};

export default ProductList;

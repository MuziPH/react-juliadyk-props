import React from "react";
import PropTypes from "prop-types";

function ProductInfo({ product }) {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    );
};

ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};
export default ProductInfo;
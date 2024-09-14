import { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function ProductDetails() {
    const [product, setProduct] = useState(null);

    // First argument is the function for the side effect () => {}
    // Second argument array of dependencies []
    // useEffect will only run when any of the array elements changes between renders
    // Empty array means the useEffect runs after every render
    useEffect(() => {
        fetch("https://api.example.com/products")
            .then(response => response.json()) // parse the response body as json
            .then(setProduct(data => setProduct(data)))
            .catch(error => console.log("Error fetching data!!"))
    }, []);

    if (!product) {
        return (
            <p>Loading...</p>
        );
    }
    return (
        <div>
            <ProductImage imageUrl={product.image} />
            <ProductInfo name={product.name} price={product.price} />
        </div>
    );
};

export default ProductDetails;

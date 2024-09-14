import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function ProductDetails() {
    const product = {
        name: "Under Armour Hoodie",
        price: "R1450.55",
        image: "assets/hoodie.jpg",
    };
    return (
        <div>
            <ProductImage imageUrl={product.image} />
            <ProductInfo name={product.name} price={product.price} />
        </div>
    );
};

export default ProductDetails;

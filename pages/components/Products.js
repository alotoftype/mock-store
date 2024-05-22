import ProductCardVertical from "./ProductCard";
import React from "react";

export default function Products(props) {
  console.log(props);

  return (
    <div>
      <ul className="productList">
        {props.productList.map((product) => (
          <li className="productCard" key={product.id}
          >
            <ProductCardVertical
              price={product.price}
              image={product.image}
              id={product.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

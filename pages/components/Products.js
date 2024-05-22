import ProductCardVertical from "./ProductCard";
import React, { useEffect, useState } from "react";

export default function Products(props) {
    const [productList, setProductList] = useState(props.productList || []);
    
    useEffect(() => {
        if(props.productList) {
            setProductList(props.productList);
        }
    }, [props.productList]);

  return (
    <div>
      <ul className="productList">
        {productList.map((product) => (
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

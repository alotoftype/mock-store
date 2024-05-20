import ProductCardVertical from './ProductCard'
import React from 'react'


export default function Products (props) {
    console.log(props);

    return (
        <div>

        <h1> Featured Products </h1>
        <ul className='productList'>
        {props.productList.map((product)=> (
            <li className='productCard'>
           < ProductCardVertical
            // name={product.title}
            // description = {product.description}
            price = {product.price}
            image = {product.image}
           />
           </li>
        )
        )}
        </ul>
     


        </div>
    )
}

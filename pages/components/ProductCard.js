import {
  SfButton,
  SfRating,
  SfCounter,
  SfLink,
  SfIconShoppingCart,
  SfIconFavorite,
} from "@storefront-ui/react";
import React from "react";

export default function ProductCardVertical(props) {
  console.log(props);
  
  return (
    <div className="rounded-md hover:shadow-lg max-w-[300px]">
      <div className="relative">
        <SfLink href={`/PDP/${props.id}`} className="block"> 
          <img
            src={props.image}
            alt="Great product"
            className="h-auto rounded-md aspect-square"
            width="300"
            height="300"
          />
        </SfLink>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" className="no-underline">
          {props.name}
        </SfLink>

        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          {props.description}
        </p>
        <span className="priceText">${props.price}</span>
      </div>
    </div>
  );
}

import {
  SfButton,
  SfLink,
  SfCounter,
  SfIconShoppingCart,
  SfIconCompareArrows,
  SfIconFavorite,
  SfIconSell,
  SfIconPackage,
  SfIconRemove,
  SfIconAdd,
  SfIconWarehouse,
  SfIconSafetyCheck,
  SfIconShoppingCartCheckout,
} from "@storefront-ui/react";
import { useCounter } from "react-use";
import { useId, ChangeEvent } from "react";
import { clamp } from "@storefront-ui/shared";

export default function ProductDetails(props) {
  const {productDetails} = props;
  console.log(productDetails);  
  const inputId = useId();
  const min = 1;
  const max = 999;
  const [value, { inc, dec, set }] = useCounter(min);
  function handleOnChange(event) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(Number(clamp(nextValue, min, max)));
  }
  return (
    <div
      className="page-container"
      style={{
        textAlign: "left",
        padding: "20px",
        opacity: 1,
        fontsize: "18px",
        fontweight: "400px",
      }}
    >
      <section className="product-detail">
        <h1 className="productTitle">{productDetails.title}</h1>
        <strong className="productPrice" >${productDetails.price}</strong>
        
            <SfButton
              size="lg"
              className="addToCart-button"
              slotPrefix={<SfIconShoppingCart size="sm" />}
            >
              Add to cart
            </SfButton>
         

        <ul className="descriptionText">
          <p>
          {productDetails.description}
          </p>
        </ul>
      </section>
    </div>
  );
}

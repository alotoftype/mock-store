import { SfIconShoppingCart } from "@storefront-ui/react";

export default function WelcomeHeader() {
  return (
    <div className="welcome-header">
      <a href="/Cart" className="shoppingCartLink">
        <SfIconShoppingCart className="shoppingCart" />
      </a>{" "}
    </div>
  );
}

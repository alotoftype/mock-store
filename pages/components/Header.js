import Image from "next/image";
import { SfIconShoppingCart } from "@storefront-ui/react";

export default function Header() {
  return (
    <div className="header">
      <a href="/" className="headerLink">
        <Image
          //logo laying on top
          src="/images/Logo.png"
          alt="Overlay Image"
          width={363}
          height={82}
          className="overlayImage"
        />
      </a>
      <a href="/Cart" className="shoppingCartLink">
        <SfIconShoppingCart className="shoppingCart" />
      </a>
    </div>
  );
}

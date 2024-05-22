import { SfButton } from "@storefront-ui/react";
import Image from "next/image";

export default function CollectionBanner() {
  return (
    <div className="bannerContainer">
    <div
      className="collectionBanner"
      style={{
        backgroundImage: "url('/images/Rectangle.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
    >
      
    </div>
    <div className="bannerContentWrapper">
        <h2 className="welcome-text">Free your wardrobe</h2>
        <a href="/PLP">
          <SfButton className="bannerButton">Shop Now</SfButton>
        </a>
      </div>
    </div>
  );
}

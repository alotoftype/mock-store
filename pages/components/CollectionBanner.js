import { SfButton } from '@storefront-ui/react';
import Image from 'next/image';

export default function CollectionBanner() {
  return (
    <div className="collectionBanner" style={{
        //banner image
        backgroundImage: "url('/images/Rectangle.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px'
      }}>
        <div className="contentWrapper">
          {/* //text & button overlay */}
          <h2>Free your wardrobe</h2>
          <SfButton>Shop Now</SfButton>

       
        </div>
      </div>
  );
}

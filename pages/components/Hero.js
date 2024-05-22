import { SfButton } from '@storefront-ui/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="heroContainer" style={{
        //banner image
        backgroundImage: "url('/images/Hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="contentWrapper">
          <Image
          //logo laying on top
            src="/images/Logo.png"
            alt="Overlay Image"
            width={363}
            height={82}
            className="overlayImage"
            />
        </div>
      </div>
  );
}

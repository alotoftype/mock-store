import Image from 'next/image';

export default function Men () {
  return (
    <div className="heroContainer" style={{
        //banner image
        backgroundImage: "url('/images/Men.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="contentWrapper">
        <h1>Men</h1>
        </div>
      </div>
  );
}

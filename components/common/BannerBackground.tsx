// components/bannerBackground.tsx
import picture from '../../src/images/BG-2-1.png';
import Image from 'next/image';

const BannerBackground = () => {
    // Banner logo img
    return (
    <>
      <Image className='img-fluid w-100' src={picture} alt="banner bg logo" />
    </>
  );
};

export default BannerBackground;
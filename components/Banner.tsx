// components/Banner.tsx
import React from 'react';
import bankImg  from '../src/images/banner.png';

const BannerSection = () => {
    // Banner section
    return (
        <section className="banner-sec" style={{
            backgroundImage: `url(${bankImg.src})`
          }}>
    <div className="custome-container">
    <h6>Let's innovate together your online presence. </h6>
    <h4>An experienced & professional team driven by your success. </h4>
    <a href="#"> Book a meeting</a>
</div>
 </section>
    );
};

export default BannerSection;
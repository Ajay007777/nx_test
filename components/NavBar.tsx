// components/NavBar.tsx
'use client';
import React, { useEffect, useState } from 'react';
import whatsapp from '../src/images/whatsapp.png';
import france from '../src/images/france.png';
import logo from '../src/images/logo.png';
import Image from 'next/image';

const NavBar = () => {
    // Nav Bar
    const [isClassRemoved, setIsClassRemoved] = useState(true);

    const handleRemoveClass = () => {
        // Toggle the state to indicate whether the class should be removed or not
        setIsClassRemoved(!isClassRemoved);
    };
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
          <div  className={!isClassRemoved === true ? 'open' :'close' } id="mySidebar">
                    <div className="side-bar-ink">
                        <a href="#" className="w3-bar-item w3-button">🌌 our clients</a>
                        <a href="#" className="w3-bar-item w3-button">🔥 about</a>
                        <a href="#" className="w3-bar-item w3-button"> 🚀 services & prices</a>
                    </div>
                </div>
            <header className={`${scrolled ? 'scrolled' : 'no-scrolled'}`}>
                <div className="custome-container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="inner-logo">
                                <Image className='w-55' src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-head">
                                <a href="#"><Image className='w-10' src={whatsapp} alt="" /></a>
                                <a href="#"><Image className='w-10' src={france} alt="" /></a>
                                <button onClick={handleRemoveClass} _ngcontent-ng="" className={isClassRemoved ? '' : 'menu-open'}>
                                    <span _ngcontent-ng=""></span>
                                    <span _ngcontent-ng=""></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
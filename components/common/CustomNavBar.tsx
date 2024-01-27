// components/CustomNavbar.js
'use client'
import React, { useState } from 'react';
import styles from '../../app/assets/custom.module.css';

const CustomNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.navbar} ${isExpanded ? styles.expanded : ''}`}>
      <button className={styles.toggleButton} onClick={handleToggle}>
        Toggle Navbar
      </button>
      {/* Add other navbar content here */}
    </div>
  );
};

export default CustomNavbar;

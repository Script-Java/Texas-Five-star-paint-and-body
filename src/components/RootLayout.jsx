// src/components/RootLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './scrollToTop';

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet /> {/* This is where your page components will be rendered */}
    </>
  );
};

export default RootLayout;
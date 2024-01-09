import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ExpectedLinks } from '../../../1-DATA/Data';
import SideMenu from '../../../0-LAYOUT/NAVIGATION/SideMenu';
const Expected = () => {
  const [height, setHeight] = useState(window.innerHeight);


  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const appContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row', // Set the flexDirection to 'row' for side-by-side layout
    minHeight: height - 80,   
    marginLeft: 'px',
    marginRight: '22px',
  };

  

  return (
    <div style={appContainerStyle}>

     <SideMenu sideMenuDataProp={ExpectedLinks}   />
      <div>
        <Outlet /> {/* This is where the content will be displayed */}
      </div>
    </div>
  );
};

export default Expected;


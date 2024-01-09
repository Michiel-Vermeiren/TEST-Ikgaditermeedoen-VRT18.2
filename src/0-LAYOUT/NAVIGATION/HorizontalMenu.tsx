import React from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';


const horizontalMenuStyle = `
  .horizontal-menu {
    display: flex;
    border: 0px solid #ccc;   
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: #F3F2F1;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2); /* Add a box shadow at the bottom */
    height: 30px; /* Reduce the menu height to 50 pixels */
    padding-left:14px;
  }

  .nav-link2 {
    border-bottom: solid 3px transparent; /* Set a transparent border by default */
  }

  
  .menu-item {
    display: flex;
    align-items: center;
    font-size: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 6px 0;
  }

  .test-div {
    margin-left: auto; /* Push it to the right */
    margin-right: 25px; /* Add a right margin of 10px */
    margin-top: 3px;
    font-size: 16px;
   
    
  }
`;



interface HorizontalMenuProps {
  routeBase: string;
  tabsDataProp: {
    name: string;
    title: string;
    subroutes: string[];
    subtitles: string[];
  }[];
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ routeBase, tabsDataProp }) => {
  let location = useLocation();
   // Access the current URL
   const currentURL = location.pathname;
  return (
    <div>
      <style>{horizontalMenuStyle}</style>
      <div className="horizontal-menu" >
      {tabsDataProp.map((item) => (
        <div className="menu-item" key={item.name}>
    <NavLink
      to={`${routeBase}/${item.name}`}
      className="nav-link2"
      style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'black' : '#333',
        textDecoration: isActive ? 'underline' : 'none',
        textDecorationColor: isActive ? '#4472C1' : 'transparent',
        textUnderlineOffset: isActive ? '10px' : '0px',
        textDecorationThickness: isActive ? '4px' : '0px',
        fontSize: '16px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: isActive ? 'auto' : 'auto',
        padding: '6px 0',
        marginRight: '20px',
      })}
    >
      {item.title}
    </NavLink>
  </div>
))}
<div className="test-div">{`${currentURL.slice(1)}`}</div>


      </div>
      <div>

      <Outlet  />
      </div>
    </div>
  );
};

export default HorizontalMenu;

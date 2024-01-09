import React from 'react';
import { NavLink } from 'react-router-dom';


interface SideMenuProps { 
  sideMenuDataProp: {
    name: string;
    title: string;   
  }[];
}


const SideMenu:  React.FC<SideMenuProps> = ({ sideMenuDataProp }) => {
return (
    
<div style={{marginTop:14}}>
{sideMenuDataProp.map((item) => (
        <div className="side-menu" key={item.name}>
    <NavLink
      to={`${item.name}`}
      className="side-menu-item"
      style={({ isActive }) => ({
        fontWeight: isActive ? 'normal' : 'normal',
        backgroundColor: isActive ? '#3955A3' : 'transparent',
        color: isActive ? 'white' : '#333',
        textDecoration:  isActive ? 'none' : 'none',
        textDecorationColor: isActive ? 'white' : 'transparent',
        textUnderlineOffset: isActive ? '10px' : '0px',
        textDecorationThickness: isActive ? '4px' : '0px',
        fontSize: '16px',
        display: 'inline-flex',
        justifyContent: 'left',
        alignItems: 'left',
      })}
    >
      {item.title}
    </NavLink>
  </div>
))}

</div>


     
     

  );
};

export default SideMenu;


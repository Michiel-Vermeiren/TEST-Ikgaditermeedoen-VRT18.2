import { NavLink, useLocation } from 'react-router-dom';
import { mainMenuLinks } from '../../1-DATA/Data';
import icon from '../../0-LAYOUT/assets/logo.png';
import apple from '../../0-LAYOUT/assets/Apple.png';
import { DropDownList } from '@progress/kendo-react-dropdowns';

function MainMenu() {
  const dropdownData = [
    { text: 'Transport', value: '1' },
    { text: 'Water', value: '2' },
  ];

  const location = useLocation();
  const firstPartOfURL = location.pathname.split('/')[1];

  return (
    <div className="custom-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 50, padding: '0 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ paddingRight: 10 }}>
          <img
            src={icon}
            alt="Your Icon"
            style={{ width: 42, height: 42, }}
          />
        </div>
        <DropDownList data={dropdownData} style={{ width: 460, height:32, backgroundColor: "#4472C1", marginLeft: -8, borderColor: "#4472C1",
         borderRadius: 0, // Rectangular corners
         borderWidth: 0, // Border width
         borderStyle: "solid", // Solid border style
         outline: "none !important", // Remove the focus outline     
         boxShadow:'none'
         }} textField="text" dataItemKey="value" />
      </div>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 32,
          width: '250px',
          marginLeft: "-450px",
          justifyContent: 'space-between',
        }}
      >
        {mainMenuLinks.map((navLink, index) => (
          <div key={navLink.path} className='main-menu-item'
            style={{
              padding: '0 -5px',
              borderRight: index !== mainMenuLinks.length - 1 ? '1px solid white' : 'none',
              textDecoration: firstPartOfURL === navLink.path.split('/')[1] ? 'underline' : 'none',
              textDecorationColor: firstPartOfURL === navLink.path.split('/')[1] ? 'white' : 'transparent',
              textUnderlineOffset: firstPartOfURL === navLink.path.split('/')[1] ? '6px' : '0px',
              textDecorationThickness: firstPartOfURL === navLink.path.split('/')[1] ? '4px' : '0px',
              
              height:'29px',
              width: '100px',
              
            
           
            }}
          >
            <NavLink
              key={navLink.path}
              className="nav-item"
              to={navLink.path}
            >
              {navLink.label}
            </NavLink>
          </div>
        ))}
      </div>
      <div style={{ paddingLeft: 10 }}>
        <img
          src={apple}
          alt="Apple Icon"
          style={{ width: 40, height: 40, marginRight: 10 }}
        />
      </div>
    </div>
  );
}

export default MainMenu;


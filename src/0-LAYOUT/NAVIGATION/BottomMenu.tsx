import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import {  bottomMenuItems } from '../../1-DATA/Data';
const BottomMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();



    // botom mmenu select => after clicking
  const setSelectedItem = (pathName: string): string => {
    const currentItem = bottomMenuItems.find((item) => item.route === pathName);
    return currentItem?.text || '';
  };

    //Navigation bottom click event
    const onBottomSelect = (event: BottomNavigationSelectEvent) => {     
        navigate(event.itemTarget.route)
    console.log(event.itemTarget.route)
      };
    

  const selected = setSelectedItem(location.pathname);
    return ( <>
       <BottomNavigation
          positionMode={"fixed"}          
          items={bottomMenuItems.map((item) => ({
            ...item,
            selected: item.text === selected,
          }))}
          onSelect={onBottomSelect}
        />
    </> );
}
 
export default BottomMenu;
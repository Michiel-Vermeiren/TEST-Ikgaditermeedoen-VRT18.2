import { useNavigate, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationSelectEvent,
} from "@progress/kendo-react-layout";

import { folderIcon, homeIcon, filePdfIcon, gearIcon,cartIcon, userIcon } from "@progress/kendo-svg-icons";



export const bottomMenuItems  = [
    {  text: "Users",  svgIcon: userIcon,  id: "1",icon: "user" ,route: "/Users"},
    {  text: "Organization",  svgIcon: folderIcon, id: "2",icon: "style-builder" ,route: "/Organization" },
    {  text: "Market", svgIcon: cartIcon, id: "3", icon: "cart",route: "/Market" },
    {  text: "Solutions", svgIcon: homeIcon, id: "4", icon: "wrench",route: "/Solutions" },
    {  text: "Reports", svgIcon: filePdfIcon, id: "5", icon: "file-pdf" ,route: "/Reporting"},
    {  text: "Account", svgIcon: gearIcon, id: "6", icon: "user" ,route: "/Account"},
    ];

    // botom mmenu select => after clicking
    const setSelectedItem = (pathName: string): string => {
        const currentItem = bottomMenuItems.find((item) => item.route === pathName);
        return currentItem?.text || '';
      };

const BottomMenu2 = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
 
export default BottomMenu2;
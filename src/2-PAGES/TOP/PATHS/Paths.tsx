import {PathTabs} from '../../../1-DATA/TabsData';
import HorizontalMenu from '../../../0-LAYOUT/NAVIGATION/HorizontalMenu';
import TabComponent from '../../../3-COMPONENTS/TabContent';



const Paths = () => {
    return ( <>
  
   <HorizontalMenu   tabsDataProp={PathTabs}  routeBase={'/Paths'}  />
    </> );
}
export default Paths;
// <TabComponent routeBase="/Paths" tabsDataProp={PathTabs} />
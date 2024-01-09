import {ClaimsTabStrip} from '../../../1-DATA/TabsData';
import HorizontalMenu from '../../../0-LAYOUT/NAVIGATION/HorizontalMenu';

const Claims = () => {
    return ( <>
      
   <HorizontalMenu   tabsDataProp={ClaimsTabStrip}  routeBase={'/Claims'}  />
    </> );
}
export default Claims;

//<TabComponent routeBase="/Claims" tabsDataProp={ClaimsTabStrip} />
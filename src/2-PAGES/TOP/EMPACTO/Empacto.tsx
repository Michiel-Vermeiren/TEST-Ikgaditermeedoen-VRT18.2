import {EmpactoTabs} from '../../../1-DATA/TabsData';
import HorizontalMenu from '../../../0-LAYOUT/NAVIGATION/HorizontalMenu';

function Empacto() :  JSX.Element {


    return ( <>
      <div>
      <HorizontalMenu   tabsDataProp={EmpactoTabs}  routeBase={'/Empacto'}  />
 
    </div>

    </> );
}


export default Empacto;




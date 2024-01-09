import {  Routes, Route } from 'react-router-dom';
import NoPage from './0-LAYOUT/NoPage';
import MainMenu from './0-LAYOUT/NAVIGATION/MainMenu';
import BottomMenu from './0-LAYOUT/NAVIGATION/BottomMenu2';
//****TOP******/
//Paths
import Paths from './2-PAGES/TOP/PATHS/Paths';
import Management from './2-PAGES/TOP/PATHS/Management';
import Impact from './2-PAGES/TOP/PATHS/Impact';
import Steps from './2-PAGES/TOP/PATHS/Steps';

//Empacto
import Empacto from './2-PAGES/TOP/EMPACTO/Empacto';
import Past from './2-PAGES/TOP/EMPACTO/Past';
import Current from './2-PAGES/TOP/EMPACTO/Current';
import Future from './2-PAGES/TOP/EMPACTO/Future';

//claims
import Claims from './2-PAGES/TOP/CLAIMS/Claims';
import Expected from './2-PAGES/TOP/CLAIMS/Expected';
import DueDiligence from './2-PAGES/TOP/CLAIMS/DueDiligence';
import Orders from './2-PAGES/TOP/CLAIMS/EXPECTED/Orders';
import Quotes from './2-PAGES/TOP/CLAIMS/EXPECTED/Quotes';
import Commits from './2-PAGES/TOP/CLAIMS/EXPECTED/Commits';
import GPS from './2-PAGES/TOP/CLAIMS/Gps';




//**BOTTOM*****
import Organization from './2-PAGES/BOTTOM/Organization';
import Farmers from './2-PAGES/BOTTOM/Farmers';
import Market from './2-PAGES/BOTTOM/Market';
import Solutions from './2-PAGES/BOTTOM/Solutons';
import Users from './2-PAGES/BOTTOM/Users';
import Account from './2-PAGES/BOTTOM/Account';
import Reporting from './2-PAGES/BOTTOM/Reporting';








function App() {


  return (
    <div className="App">
      <MainMenu />
        <Routes>
        <Route path="*" element={<NoPage />} />         
                
            <Route path="/Paths/" element={<Paths />} > 
            <Route path="/Paths/steps" element={<Steps />} />   
            <Route path="/Paths/Impact" element={<Impact />} />   
            <Route path="/Paths/Management" element={<Management />} />   
            </Route>  

            <Route path="/Empacto/*" element={<Empacto />} > 
            
           
            <Route path="Past" element={<Past />} />   
            <Route path="Current" element={<Current />} />   
            <Route path="Future" element={<Future />} />   
            </Route>         
       
           
            <Route path="/Claims/*" element={<Claims />} >            
            <Route path="Expected/*" element={<Expected />}  >
            <Route path="Orders" element={<Orders />} />   
            <Route path="Quotes" element={<Quotes />} />   
            <Route path="Commits" element={<Commits />} />              
            </Route>    
            <Route path="Gps" element={<GPS />} />   
            <Route path="DueDiligence" element={<DueDiligence />} >   
            <Route path="DueDiligence/Detail/:Id" element={<DueDiligence />} />   
            </Route>  
            </Route>  


            <Route path="/Farmers" element={<Farmers />} />    
            <Route path="/Account" element={<Account />} />    
            <Route path="/Farmers" element={<Farmers />} />    
            <Route path="/Reporting" element={<Reporting />} />    
            <Route path="/Organization" element={<Organization />} />    
            <Route path="/Solutions" element={<Solutions />} />    
            <Route path="/Users" element={<Users />} />    
            <Route path="/Market" element={<Market />} />    
            
                   
            
           
        </Routes>
      <BottomMenu/>
    </div>
  )
}

export default App

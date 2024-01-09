//horizontalmenustyle css below
import CustomStepper from "../../3-COMPONENTS/CustomStepper";

const horizontalMenuStyle = `
  .horizontal-menu {
    display: flex;
    border: 0px solid #ccc;   
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: #F3F2F1;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2); /* Add a box shadow at the bottom */
    height: 40px; /* Reduce the menu height to 50 pixels */
    padding-left:14px;
  }

  .nav-link {
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
import { StepperChangeEvent } from "@progress/kendo-react-layout";
interface HorizontalMenuProps {
  stepperValue: number;
  onStepperChange: (event: StepperChangeEvent) => void;
  stepperSteps: { label: string }[];
  onSetupClick: (event: React.MouseEvent<HTMLDivElement>) => void; // 

}

const HorizontalBottomMenu: React.FC<HorizontalMenuProps> = ({
  stepperValue,
  onStepperChange,
  stepperSteps,
 


}) => {

  


  return ( // Ensure that the return statement is correctly structured
      <div className="horizontal-menu">
          { <style>{horizontalMenuStyle}</style> }
          <div    className="menu-item">
             <CustomStepper 
            value={stepperValue} 
            onChange={onStepperChange} 
            steps={stepperSteps}

          />
               
              </div>
            
         
       
          </div>
         

     
  );
}

 
export default  HorizontalBottomMenu ;




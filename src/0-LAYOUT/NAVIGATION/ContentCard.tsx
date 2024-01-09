import React from "react";
import { Card, CardTitle, CardBody, CardHeader } from "@progress/kendo-react-layout";

//DEZE IS DEFINITIEF EN FLEXIBLE EN KAN OVERAL DIENEN LINKS RECHTS EN KAN VOLLEIGE
// DYNAMISCH ZIJN AFHANKELIJK FAN SCREENSIZE RESIZING;; DUS DEZE HANTEREN 

interface LeftCardProps {
  title?: React.ReactNode;  // For the card title
  children?: React.ReactNode; // For the main content
  height:number;
  marginLeft:number;
  marginTop:number;
  width:number;
}

const LeftCard2: React.FC<LeftCardProps> = ({ title, children,height,width,marginLeft,marginTop}) => {
  return (
    <Card style={{ height: height, width: width, marginLeft: marginLeft, marginTop: marginTop, marginRight: "14px" }}>
       <CardHeader>
         <CardTitle style={{ backgroundColor: "rgba(248, 249, 250)", height: "5px", paddingLeft: "0px",paddingBottom:"15px" }}>
  {title}
</CardTitle>
       </CardHeader>


      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

export default LeftCard2;


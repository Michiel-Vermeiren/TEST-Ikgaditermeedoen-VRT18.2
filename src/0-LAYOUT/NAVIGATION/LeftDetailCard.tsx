import React from 'react';
import { Card, CardBody, CardTitle } from '@progress/kendo-react-layout';

interface LeftDetailCardProps {
  children: React.ReactNode; // Accept any child element
  children2: React.ReactNode; // Accept any child element 
}

const LeftDetailCard: React.FC<LeftDetailCardProps> = ({ children, children2 }) => {
  return (
    <Card style={{ height: "555px", width: "620px", marginLeft: "14px", marginTop: "14px", marginRight: "14px" }}>
      <CardTitle style={{ backgroundColor: "rgba(248, 249, 250)",height:"44px", marginBottom: "-3px",  paddingBottom: "0px", paddingLeft: "14px" , display: "flex", alignItems: "center"}} >
      {children} 
      </CardTitle>
      <CardBody>{children2}</CardBody> {/* Render any child elements here */}
    </Card>
  );
}

export default LeftDetailCard;


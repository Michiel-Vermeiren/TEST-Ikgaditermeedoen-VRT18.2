import React from "react";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";

interface LeftCardProps {
  title?: React.ReactNode;  // For the card title
  children?: React.ReactNode; // For the main content
}

const LeftCard: React.FC<LeftCardProps> = ({ title, children }) => {
  return (
    <Card style={{ height: "555px", width: "620px", marginLeft: "14px", marginTop: "14px", marginRight: "14px" }}>
      <CardTitle style={{ backgroundColor: "rgba(248, 249, 250)", height: "44px", marginBottom: "-3px", paddingBottom: "0px", paddingLeft: "14px", display: "flex", alignItems: "center" }}>
        {title}
      </CardTitle>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

export default LeftCard;


import React from 'react';
import { Card, CardBody, CardTitle } from '@progress/kendo-react-layout';

interface RightCardProps {
  title: string | undefined;
  children: React.ReactNode; // Accept any child element
}

const RightCard: React.FC<RightCardProps> = ({ title, children }) => {
  return (
    <Card style={{ height: '555px', width: '870px', marginTop: "14px" }}>
      <CardTitle
        style={{
          backgroundColor: 'rgba(248, 249, 250)',
          height: '44px',
          marginBottom: '-3px',
          paddingBottom: '0px',
          paddingLeft: '14px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <p>{title}</p>
      </CardTitle>
      <CardBody>{children}</CardBody> {/* Render any child elements here */}
    </Card>
  );
}

export default RightCard;


// DetailedForm.tsx
import React, { useState } from 'react';

interface UpdateLocationProps {
  onFormSubmit: (data: { name: string; description: string }) => void;
}

const LeftDetailForm: React.FC<UpdateLocationProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

 

  return (
    <form >
      <div>
        <h1>Update</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
       
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="Description"
          name="Description"
          value={formData.description}
    
        />
      </div>

    </form>
  );
};

export default LeftDetailForm;
// DetailedForm.tsx
import React, { useState } from 'react';

interface NewLocationProps {
  onFormSubmit: (data: { name: string; surname: string }) => void;
}

const NewLocation: React.FC<NewLocationProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
  });



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>New Location</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewLocation;

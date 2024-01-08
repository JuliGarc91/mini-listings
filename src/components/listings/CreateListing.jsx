// ----- Create Listing Form (CREATE) -----
/*Develop a form with inputs for the person's name, city, state, and description for the listing. ( or if you want another type of listing add the appropriate inputs to the form)
Handle form submission logic, including state management and redirection to the listings page ("/listings") after successful submission.

handleSubmit updates the local state with the new listing. Keep in mind that this change won't persist between page reloads or be reflected in the listingsData.json file. For actual persistence, you would need to send the data to a backend server that can handle file operations or database updates.

Remember, this is a frontend simulation. Real data persistence requires a backend solution.
*/
import { useState } from 'react';
import listingsData from '../../../data/listingsData.json';

const CreateListing = ({ addListing }) => {
  const [newListing, setNewListing] = useState({
    name: '',
    city: '',
    state: '',
    description: ''
  });

  const handleChange = (e) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

// handleSubmit updates the local state with the new listing. Keep in mind that this change won't persist between page reloads or be reflected in the listingsData.json file. For actual persistence, you would need to send the data to a backend server that can handle file operations or database updates.
const handleSubmit = (e) => {
    e.preventDefault();
    addListing(newListing); // Add the new listing
    setNewListing({ name: '', city: '', state: '', description: '' });
    // reset();
  };


//   const reset = () => {
//     setNewListing({ name: '', city: '', state: '', description: '' }); // Reset form
//   }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newListing.name} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={newListing.city} onChange={handleChange} />
      </label>
      <label>
        State:
        <input type="text" name="state" value={newListing.state} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={newListing.description} onChange={handleChange} />
      </label>
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default CreateListing;


/* ----- Creating a JSON file with input data you can download to Local machine ------
import {useState} from "react";
const CreateListing = () => {
     const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
// populates Data to json file you can download to your local machine
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "personData.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <button type="submit">Create and Download JSON file with input</button>
    </form>
  )
}

export default CreateListing
*/
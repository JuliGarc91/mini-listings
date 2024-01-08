// ------ Listings view (READ) ------
/* Display all the listings */
import React from 'react';

const Listings = ({ listings }) => {
  // Render the listings from the JSON file
  const renderListings = () => {
    return listings.map((listing, index) => (
      <div key={index}>
        <h3>{listing.name}</h3>
        <p>City: {listing.city}</p>
        <p>State: {listing.state}</p>
        <p>Description: {listing.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Listings</h2>
      {renderListings()}
    </div>
  );
}

export default Listings;

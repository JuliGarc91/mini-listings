import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";
import Footer from "./components/common/Footer";
import CreateListing from "./components/listings/CreateListing";
import Listings from "./components/listings/Listings";
import listingsData from "../data/listingsData.json"// import your data here

const App = () => {
  const [listings, setListings] = useState(listingsData);

  const addListing = (newListing) => {
    setListings([...listings, newListing]);
  };

  return (
    <main>
      <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings listings={listings} />} />
          <Route path="/create-listing" element={<CreateListing addListing={addListing} />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
};

export default App;
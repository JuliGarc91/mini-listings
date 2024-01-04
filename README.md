# Mini Listings

Welcome to Mini-Listings, a simplified, Craigslist-inspired web application built using ReactJS and Vite. This project is designed to offer a hands-on experience with essential React concepts, including component-based architecture, state management, and routing with React Router 6.2.1.

## Setup

- `fork` and `clone` this repo.
- `npm install`
- `npm run dev`


## Project Structure:

###Components:
**NavBar:** For navigation links.
**LandingPage:** Welcome view.
**CreateListingForm:** Form to create a new listing.
**ListingsView:** View to display all listings.
**Routes:**
  - `/`: Landing page.
  - `/create-listing`: Page to create a new listing.
  - `/listings`: Page to view all listings.


## Project Components and Routes:

1. Navigation Bar (NavBar) Component:
    - Implement with links to the Home ("/"), Create Listing ("/create-listing"), and View Listings ("/listings") pages.
    - Ensure the app title in the NavBar is clickable and redirects to the Home page.

1. Landing Page (LandingPage) Component:
  - Design this component as your welcome view.

1. Create Listing Form (CreateListingForm) Component:
  - Develop a form with inputs for the person's name, city, state, and description for the listing. ( or if you want another type of listing add the appropriate inputs to the form)
  - Handle form submission logic, including state management and redirection to the listings page ("/listings") after successful submission.

1. Listings View (ListingsView) Component:
  - Display all listings in this component.

Additional Instructions
- use React Router 6.2.1 to navigate between views.
- use state to manage your listings for updates and displaying.
# Paradise Nursery

Paradise Nursery is a modern plant e-commerce web application built with React and Vite. The application allows users to browse plants, add products to a shopping cart, manage quantities, and view the total purchase amount. State management is handled using Redux Toolkit

## Features

* Add product to cart
* Increase and decrease product quantity
* Delete product from cart
* Total cart amount calculation
* Cart item count indicator

## Tech Stack

* React
* Vite
* Tailwind CSS
* React Router DOM
* React Redux
* Redux Toolkit
* Lucide React

## Installation

```bash
git clone https://github.com/username/repository-name.git
cd repository-name
npm install
npm run dev
```

## Project Structure

```bash
src/
├── app/
│   └── store.js
├── features/
│   └── cart/
│       └── cartSlice.js
├── pages/
│   ├── HomePage.jsx
│   ├── ProductPage.jsx
│   └── CartPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Pages

### Home Page

The landing page introduces Paradise Nursery and provides users with an entry point to explore the available plant collection.

### Product Listing Page

Displays a collection of plants categorized for users to browse and add to their shopping cart..

### Shopping Cart Page

Allows users to:

* View selected products
* Update product quantities
* Remove products from the cart
* View the total cart amount
* Continue shopping or proceed to checkout

## Author

Created by Wandika Hadi

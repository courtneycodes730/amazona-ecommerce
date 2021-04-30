import React from "react";
import Product from "./components/Product";

import data from "./data";
// Timestamp 56:52

function App () {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          { data.products.map( ( product ) => (
            <Product product={ product } key={ product._id } />
          ) ) }
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets, food_list } from "../../assets/assets";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Home.css"; // Import custom CSS file

const Home = () => {
  const [productCount, setProductCount] = useState({});
  console.log(productCount);
  // Function to add a product
  const addProduct = (productId) => {
    setProductCount((prevState) => ({
      ...prevState,
      [productId]: (prevState[productId] || 0) + 1,
    }));
  };

  // Function to subtract a product
  const subtractProduct = (productId) => {
    setProductCount((prevState) => ({
      ...prevState,
      [productId]: Math.max((prevState[productId] || 0) - 1, 0),
    }));
  };

  return (
    <div className="container">
      <h1>Food List</h1>
      <div className="row">
        {food_list.map((item) => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Category: {item.category}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => subtractProduct(item._id)}
                    disabled={!productCount[item._id]}
                  >
                    -
                  </button>
                  <span>{productCount[item._id] || 0}</span>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => addProduct(item._id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

/* eslint-disable no-unused-vars */
import React from "react";
import { assets, food_list } from "../../assets/assets";

const Home = () => {
  return (
    <div>
      <h1>Food List</h1>
      <div>
        {food_list.map((item) => (
          <div key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

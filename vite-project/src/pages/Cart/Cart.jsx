/* eslint-disable no-unused-vars */
import React from "react";
import { assets, food_list } from "../../assets/assets";

const Cart = ({ productCount }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    Object.keys(productCount).forEach((key) => {
      const index = key - 1;
      console.log(index);
      if (food_list[index]) {
        totalPrice += food_list[index].price * productCount[key];
      }
    });
    return totalPrice;
  };

  return (
    <div>
      <p>
        Total Price: $<b>{calculateTotalPrice()}</b>
      </p>
    </div>
  );
};

export default Cart;

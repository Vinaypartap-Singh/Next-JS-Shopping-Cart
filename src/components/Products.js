"use client";

import { add } from "@/store/cartSlice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (data) => {
    dispatch(add(data));
  };

  const cartItem = useSelector((state) => state.cart);

  return (
    <>
      <h5 style={{ marginTop: "30px" }}>Cart Items: {cartItem.length}</h5>
      <div className="card-wrapper">
        {products?.map((data) => {
          return (
            <div key={data.id} className="card">
              <img
                src={data.image}
                alt="Product Image"
                className="p-card-image"
              />
              <h4>{data.title}</h4>
              <button onClick={() => addToCart(data)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

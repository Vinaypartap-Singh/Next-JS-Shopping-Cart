"use client";

import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
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
          </div>
        );
      })}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);

  async function fetchData() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setProduct(data.products);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <div key={item.id}>
          <h3>
            Name: {item.title} <span>Price: {item.price} </span>
          </h3>
        </div>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useGetProducts } from "../hooks/product-hooks";
import {useGetCategory} from "../hooks/category-hooks"
import Product from "./Product";

export default function Shop() {
  const { products, getProducts, isLoading: isFetchingProducts} = useGetProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = isFetchingProducts;

  return (
    <div className="all-products">
      <h2>Áruház</h2>
      {products.length === 0 ? (
        <div className="form-container">
          <p className="message">No products yet.</p>
        </div>
      ) : (
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} isAdmin={false}/> 
          ))}
        </div>
      )}
    </div>
  );
}

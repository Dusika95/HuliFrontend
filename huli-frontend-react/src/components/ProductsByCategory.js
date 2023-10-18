import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../hooks/product-hooks";
import Product from "./Product";

export default function ProductByCategory() {
  const { categoryId } = useParams();

  console.log("Fetching products for categoryId:", categoryId);
  const { products, getProductsByCategory, isLoading } =
    useGetProductsByCategory(categoryId);

  console.log("Received products:", products); // Add this line for debugging

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId);
    }
  }, [categoryId]);

  return (
    <div className="products-by-category">
      <h2>Products in Category {categoryId}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products in this category.</p>
      ) : (
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

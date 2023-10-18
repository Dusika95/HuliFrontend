import React from "react";
import { useGetProducts } from "../hooks/product-hooks";
import Product from "./Product";

export default function Shop() {
  const { products, isLoading, refreshProducts } = useGetProducts();

  return (
    <div className="all-products">
      <h2>
        Áruház <button onClick={() => refreshProducts()}>refresh</button>
      </h2>

      {isLoading ? <>Loading...</> : <ProductList products={products} />}
    </div>
  );
}

function ProductList({ products }) {
  return (
    <>
      {products.length === 0 ? (
        <div className="form-container">
          <p className="message">No products yet.</p>
        </div>
      ) : (
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} isAdmin={false} />
          ))}
        </div>
      )}
    </>
  );
}

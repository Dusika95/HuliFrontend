import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoImage from "../missing.png"
import EditProduct from './EditProduct';
import { useEditProduct } from '../hooks/product-hooks';


import * as productService from '../services/product-service';

export default function ProductDetail({isAdmin}) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingLoading, setIsEditingLoading] = useState(false); 

  const numericProductId = parseInt(productId);

  const { editProduct } = useEditProduct();

  useEffect(() => {
    setIsLoading(true);
    productService.getProductById(numericProductId)
      .then((fetchedProduct) => {
        console.log('Fetched Product:', fetchedProduct);
        setProduct(fetchedProduct);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setIsLoading(false);
      });
  }, [numericProductId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  /*const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (editedProduct) => {
    setIsEditingLoading(true);
    editProduct(editedProduct)
      .then(() => {
        setIsEditing(false);
        setIsEditingLoading(false);
        // You might also want to update the product details
        // by fetching the edited product again or updating it in the state.
      })
      .catch((error) => {
        console.error('Error editing product:', error);
        setIsEditingLoading(false);
      });
  };*/

 /* return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : product && product.name ? (
        <div className="product-detail">
          <div>
            <img src={NoImage} alt="Product Image" />
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price} Ft</p>
            <p>Rating: {product.star}</p>
            {isAdmin ? (
              isEditing ? (
                <EditProduct
                  product={product}
                  refresh={() => setIsEditing(false)}
                  editProduct={handleSaveEdit} // Pass the save function
                  isLoading={isEditingLoading}
                />
              ) : (
                <button onClick={handleEditClick}>Edit</button>
              )
            ) : null}
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <div className="product-detail-comments">
        <h3>Comments</h3>
        {product && product.comment ? (
          product.comment.map((comment, index) => (
            <div key={index}>
              <h5>{comment.userName}:</h5>
              <p>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
}*/
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : product && product.name ? ( 
        <div className="product-detail">
          <div>
            <img src={NoImage} alt="Product Image" />
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price} Ft</p>
            <p>Rating: {product.star}</p>
            {isAdmin ? (
              isEditing ? (
                <EditProduct
                  product={product}
                  refresh={() => setIsEditing(false)}
                  editProduct={editProduct}
                  isLoading={false} 
                  /*editProduct={handleSaveEdit} // Pass the save function
                  isLoading={isEditingLoading}*/
                />
              ) : (
                <button onClick={handleEditClick}>Edit</button>
              )
            ) : null}
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <div className="product-detail-comments">
        <h3>Comments</h3>
        {product && product.comment ? (
          product.comment.map((comment, index) => (
            <div key={index}>
              <h5>{comment.userName}:</h5>
              <p>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
}

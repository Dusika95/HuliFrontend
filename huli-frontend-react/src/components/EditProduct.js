import { useState, useEffect } from 'react';
import { useGetCategory } from "../hooks/category-hooks";

export default function EditProduct({ product, refresh, editProduct, isLoading }) {
    const initialProductData = {
      id: "",
      name: "",
      description: "",
      picture: "",
      category: "",
      price: 0,
      quantity: 0,
    };
  
    const [productData, setProductData] = useState(initialProductData);
  
    useEffect(() => {
      if (product.id) {
        setProductData({
          id: product.id,
          name: product.name || "",
          description: product.description || "",
          picture: product.picture || "",
          category: product.category || "",
          price: product.price || 0,
          quantity: product.quantity || 0,
        });
      } else {
        setProductData(initialProductData);
      }
    }, [product]);
  
    const handleChange = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      setProductData((prevData) => ({
        ...prevData,
        [fieldName]: fieldValue,
      }));
    };
  
    const handleEdit = async (e) => {
      e.preventDefault();
      try {
        const editedProduct = await editProduct(productData);
        console.log("Changes saved:", editedProduct);
        refresh();
      } catch (error) {
        console.error("Error saving changes:", error);
        // Display an error message to the user
      }
    };
  
    const { categories, getCategories, isLoadingCategory: isFetchingCategories } = useGetCategory();
  
    useEffect(() => {
      getCategories();
    }, []);
  
    const isLoadingCategory = isFetchingCategories;
  
    return (
      <div className="container">
        <h2 className="title">Edit Product</h2>
        <div className="content">
          <form onSubmit={handleEdit}>
            <div className="product-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input type="text" placeholder='Termék neve' required name="name" value={productData.name} onChange={handleChange} />
              </div>
              <div className="input-box">
                <span className="details">Description</span>
                <textarea type="text" placeholder="valami hosszú" required name="description" rows="4" cols="30" value={productData.description} onChange={handleChange}></textarea>
              </div>
              <div className="input-box">
                <span className='details'>picture name</span>
                <input type="text" placeholder='xyz.png' required name="picture" value={productData.picture} onChange={handleChange} />
              </div>
              <div className="input-box">
                <span className='details'>Category</span>
                <select name="category" value={productData.category} onChange={handleChange}>
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-box">
                <span className='details'>Price</span>
                <input type="number" placeholder='10000' required name="price" value={productData.price} onChange={handleChange} />
              </div>
              <div className="input-box">
                <span className='details'>Quantity</span>
                <input type="number" placeholder='10' required name="quantity" value={productData.quantity} onChange={handleChange} />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${isLoading && "opacity-80"}`}
              id='add-product'
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    )
  }
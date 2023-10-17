import React, { useState, useEffect } from "react";

import { useGetCategory } from "../hooks/category-hooks";

export default function AddNewProduct({refresh,addNewProduct, isLoading}){

    const initialProductState={
    name:"",
    description:"",
    picture:"",
    category:"",
    price:0,
    quantity:0
    };

    const [productData, setProductData]= useState(initialProductState);

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        if (fieldName === 'price' || fieldName === 'quantity') {
          fieldValue = parseInt(fieldValue, 10);
        }
        setProductData((prevData) => ({
          ...prevData,
          [fieldName]: fieldValue,
        }));
      };

    const handleAdd = (e) => {
        e.preventDefault();
        addNewProduct(productData);
        setProductData(initialProductState);
        refresh();
    };

    const { categories, getCategories, isLoadingCategory: isFetchingCategories} = useGetCategory();

    useEffect(() => {
      getCategories();
    }, []);
  
    const isLoadingCategory = isFetchingCategories;



    return (
        <div className="container">
            <h2 className="title">Create product</h2>
            <div className='content'>
                <form onSubmit={handleAdd}>
                    <div className='product-details'>
                        <div className="input-box">
                            <span className='details'>Name</span>
                            <input type="text" placeholder='Termék neve' required name="name" value={productData.name} onChange={handleChange}/>
                        </div>
                        <div className="input-box">
                            <span className='details'>Description</span>
                            <textarea placeholder="valami hosszú" required name="description" rows="4" cols="30" value={productData.description} onChange={handleChange}></textarea>
                        </div>
                        <div className="input-box">
                            <span className='details'>picture name</span>
                            <input type="text" placeholder='xyz.png' required name="picture" value={productData.picture} onChange={handleChange}/>
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
                            <input type="number" placeholder='10000' required name="price" value={productData.price} onChange={handleChange}/>
                        </div>
                        <div className="input-box">
                            <span className='details'>Quantity</span>
                            <input type="number" placeholder='10' required name="quantity" value={productData.quantity} onChange={handleChange}/>
                        </div>
                    </div>
                    <button type="submit" disabled={isLoading} className={`${isLoading && "opacity-80"}`} id='add-product'>Add Product</button>
                </form>
            </div>
        </div>
    )
}
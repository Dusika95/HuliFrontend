import React, { useState, useEffect } from "react";

export default function AddNewCategory({addedCategory, addNewCategory, isLoading}){
    const[newCategoryName, setNewCategoryName] = useState("")

    function handleAdd(e){
        e.preventDefault();
        addNewCategory(newCategoryName);
    }

    return(
        <div className="container">
            <h2>Create catgeory</h2>
            <div className='content'>
                <form onSumbit={handleAdd}>
                    <div className="input-box">
                        <span className='details'>Name</span>
                        <input type="text" placeholder='új kategória' required name="name" value={newCategoryName}/>
                    </div>
                    <button type="submit" disabled={isLoading} className={`${isLoading && "opacity-80"}`} id='add-product'>Add Product</button>
                </form>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react";

export default function AddNewCategory({refresh, addNewCategory, isLoading}){
    const[newCategoryName, setNewCategoryName] = useState("")

    function handleAdd(e){
        e.preventDefault();
        addNewCategory({name: newCategoryName});
        refresh();
    }
    function handleChange(event) {
        const newValue = event.target.value;
        setNewCategoryName(newValue);
      }
      useEffect(() => {
        if (!isLoading) {
          setNewCategoryName(""); 
          
        }
      }, [isLoading, refresh]);

    return(
        <div className="container">
            <h2>Create catgeory</h2>
            <div className='content'>
                <form onSubmit={handleAdd}>
                    <div className="input-box">
                        <span className='details'>Name</span>
                        <input type="text" onChange={handleChange} placeholder='új kategória' required name="name" value={newCategoryName}/>
                    </div>
                    <button type="submit" disabled={isLoading} className={`${isLoading && "opacity-80"}`} id='add-product'>Add Category</button>
                </form>
            </div>
        </div>
    )
}
import React, {useState, useEffect} from "react";
import AddNewCategory from "./AddNewCategory"
import { useAddNewCategory, useGetCategory, useDeleteCategory } from "../hooks/category-hooks";

 export default function AdminCategoryManager(){
    const {categories, getCategories, isLoadingCategory: isFetchingCategories} = useGetCategory();
    const {addedCategory, addNewCategory, isLoading: isAddingNewCatgeroy} = useAddNewCategory();
    const { deletedCategory, deleteCategory, isLoading: isDeletingCategory } = useDeleteCategory();

    const [showAddAddCategory,setShowAddCategory] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(undefined)

    useEffect(()=>{
        getCategories();
    },[addedCategory, deletedCategory])

    

  
    const isLoadingCategory = isFetchingCategories;

    return(
        <div>
            <h2>kategóra kezelő</h2>
                <div>
                    {categories.map((category) => (
                    <div key={category.id}>
                        <p>{category.id}</p>
                        <p value={category.name}>{category.name}</p>
                        <button onClick={() => deleteCategory({ id: category.id })}>X</button>
                    </div>
                    
                    ))}
                </div>
                <div>
                    <AddNewCategory refresh={getCategories} addNewCategory={addNewCategory} isLoading={isAddingNewCatgeroy}/>
                </div>
        </div>
    )
 }
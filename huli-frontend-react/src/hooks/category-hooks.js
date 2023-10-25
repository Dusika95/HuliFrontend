import { useEffect, useState } from "react";
import * as categoryService from "../services/category-service";

export const useGetCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const getCategories = () => {
        setIsLoading(true);
        categoryService.getCategories().then((categories) => {
            setCategories(categories);
            
        }).finally(()=>setIsLoading(false));
    };

    const refreshCategories = () => {
        console.log('refresh');
        setRefresh(!refresh);
    };
    useEffect(()=> {
        getCategories();
    },[refresh])
    
    return { categories, getCategories, refreshCategories, isLoading };
};

export const useAddNewCategory = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [addedCategory, setAddedCategory] = useState(undefined)

    function addNewCategory(category){
        setIsLoading(true)
        categoryService.addNewCategory(category).then((category) => {
            setAddedCategory(category);
        })
    }
    return {addedCategory, addNewCategory, isLoading}
}

export const useDeleteCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [deletedCategory, setDeletedCategory] = useState(undefined);
  
    const deleteCategory = (category) => {
      setIsLoading(true);
      categoryService.deleteCategory(category.id).then((category) => {
        setDeletedCategory(category);
        setIsLoading(false);
      });
    };
    return { deletedCategory, deleteCategory, isLoading };
  };
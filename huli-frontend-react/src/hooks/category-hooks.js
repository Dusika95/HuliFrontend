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
            setIsLoading(false);
        });
    };

    const refreshCategories = () => {
        console.log('refresh');
        setRefresh(!refresh);
    };
    
    return { categories, getCategories, refreshCategories, isLoading };
};
import { Link } from "react-router-dom";

export default function Category({category}){
    
    return(
    <div className="category">     
        <Link to={`/product-by-category/${category.id}`}>
        <p>{category.name}</p>
      </Link>
    </div>)
}
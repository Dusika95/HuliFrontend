export default function Category({category}){
    console.log(category)
    return(
    <div className="category">     
        <p>{category.name}</p>  
    </div>)
}
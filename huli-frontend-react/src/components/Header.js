import { Link } from 'react-router-dom';
import PNG from "../shop.png"


export default function Header({ user, setUser, isAdmin, setIsAdmin }) {
  const logout = () => {
    sessionStorage.clear();
    setUser(null);
    setIsAdmin(false);
  };
  
  return <nav>
    <Link to="/"><img id="logo" src={PNG} alt="logo pic"/></Link>

    {user !== null ? (
        isAdmin ? (
          <div>
            <Link className='nav-elem' to={"/admin/products"}>Termék kezelő</Link>
            <Link className="nav-elem" to={"/admin/users"} >Users</Link>
            
            <Link className="nav-elem" to={"/"} onClick={logout}> Logout </Link>
          </div>
        ) : (
          <div>
            
            
            <Link className='nav-elem' to={"/shop"}>Áruház</Link>
            <Link className="nav-elem" to={"/"} onClick={logout}> Logout </Link>
          </div>
        )
      ) : (
        <div>
          <Link className='nav-elem' to={"/shop"}>Áruház</Link>
          <Link className="nav-elem" to={"/register"}> Register </Link>
          <Link className="nav-elem" to={"/login"}> Login </Link>
        </div>
      )}  
        
  </nav>;
}

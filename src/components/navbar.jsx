import { Link } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import './navbar.css';

export default function Navbar() {
  return (
      <nav className="nav">
      <Link to="/">
        CA CMPR.
      </Link>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Cart">
          <ShoppingBagIcon className='h-6 w-6 text-white' /> 
          </Link>
        </ul>
      </nav>

  )
}
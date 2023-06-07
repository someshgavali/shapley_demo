import React from "react";
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <nav>
        <div className="navbarLeft">
            <h1>Shapley Demo</h1>
        </div>
         <div className="navbarRight">
            <li>
                <a href="https://colorlibhub.com/shapely/">Home</a>
            </li>
            <li>
                <a href="https://colorlibhub.com/shapely/blog/">Blog</a>
            </li>
            <li>
                <a href="https://colorlibhub.com/shapely/portfolio/">PortFolio</a>
            </li>
            <li>
                <a href="https://colorlibhub.com/shapely/about/">Level1</a>
            </li>
            <li>
                <a href="https://colorlibhub.com/shapely/shop/">Shop</a>
            </li>
            <li>
                <a href=""><SearchIcon className="icon"/></a>
            </li>
         </div>
    </nav>
  );
};

export default Navbar;

import Header from '../Header/Header';
import Carousels from "./Carousel";
import {Link} from 'react-router-dom';
import About from './About';
import { FaShoppingCart } from "react-icons/fa";

export default function Main1(){

    return(
        <div className="main">
            <Header />
            <Carousels />
            <div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">About us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/discount">On discount</Link>
                </li>
            </ul>
            <About />
            <Link to="/basket"><FaShoppingCart className='icon-fix'/></Link>
            </div>
        </div>
    );
}
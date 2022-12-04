import Header from '../Header/Header';
import Carousels from "./Carousel";
import {Link} from 'react-router-dom';
import Products from './Products';

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
            <Products />
            
        </div>
        </div>
    );
}
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Cards from './Cards';
import About from './About';
import Products from './Produkts';

export default function Nav(){

    return(
        <>
        <Router>
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
                <li className="nav-item">
                    <Link className="nav-link" to="/shopping">Your shopping</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/discount" element={<Cards />}/>
                <Route path="/products" element={<Products />} />

            </Routes>
            
        </div>
        </Router>
        </>
    );
}
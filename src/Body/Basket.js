import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

export default function Basket(){

    

    return(
        <div className="main">
            <div className="container">
                <div className="basket">
                    <nav className="navbar navbar-light justify-content-left fixed-top">
                        <p style={{color: "#fff"}} className="navbar-brand header-title">Your storage <SlBasket className='icon-basket'/></p>                            
                        <Link to="/"><button className="btn btn-warning header-btn" type="button">Back <AiFillBackward /></button></Link>
                    </nav>       

                </div>
            </div>
        </div>           
    );
}
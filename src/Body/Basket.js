import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Context from '../Context';
import { useContext } from 'react';
import Item from './Item';

export default function Basket(){

    const obj=useContext(Context);
    let total=0;
    obj.items.forEach(e=>{
        total=total + e.count*e.price;
    });
    return(
        <div className="main">
            <div className="container">
                <div className="basket">
                    <nav className="navbar navbar-light justify-content-left fixed-top">
                        <p style={{color: "#fff"}} className="navbar-brand header-title">Your storage <SlBasket className='icon-basket'/></p>                            
                        <Link to="/"><button className="btn btn-warning header-btn" type="button">Back <AiFillBackward /></button></Link>
                    </nav>
                    {obj.items.length===0 && <div className='h2 fw-bold' style={{textAlign: 'center', marginTop: '10%'}}>You have no purchases </div>}
                    {obj.items.length!==0 &&  obj.items.map((e, i) =><Item key={i} value={e}/> )}
                    {obj.items.length!==0 && <div className='total'>Total price: {total} $</div>}
                </div>
            </div>
        </div>           
    );
}
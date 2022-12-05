import {Link} from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";

export default function Title(){


    return(
            <nav className="navbar navbar-light justify-content-left fixed-top forms">
                <p style={{color: "#fff"}} className="navbar-brand header-title">We work for your comfort</p>                            
                <Link to="/"><button className="btn btn-warning header-btn" type="button">Back <AiFillBackward /></button></Link>
            </nav> 

    );
}
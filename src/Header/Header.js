import {Link} from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { MdAppRegistration } from "react-icons/md";



export default function Header(){
       

    return(
        <div className="header">
                <div className="container"></div>
                <nav className="navbar navbar-light justify-content-left fixed-top">

                        <p style={{color: "#fff"}} className="navbar-brand header-title">We work for your comfort</p>
                        <div style={{display: 'flex'}}>
                            <Link to="/login"><button className="btn btn-warning header-btn" type="button">Log in <CiLogin/></button></Link>                        
                            <Link to="/registration"><button className="btn btn-warning header-btn" type="button">Registration <MdAppRegistration /></button></Link>
                        </div>

                </nav>
                </div>
    );
}
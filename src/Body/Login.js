import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import {useFormik} from 'formik';

export default function Login(){

    const id=React.createRef();
    const validate= values=>{
        const errors ={};

        if(!values.name){
            errors.name="required";
        }else if(values.name.length<3){
            errors.name="should be more than 2 symbols";
        }

        if(!values.password){
            errors.password="required";
        }else if(values.password.length<3){
            errors.password="should be more than 2 symbols";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues:{
            name: '',
            password: '',
        },
        validate,
        onSubmit: values=>{
            console.log(values);  //i don't have server:(
            id.current.reset();
        }
    });

    return(
        <div className="main">
            <div className="login">
                <div className="header">
                    <div className="container">
                    <nav className="navbar navbar-light justify-content-left fixed-top">
                            <p style={{color: "#fff"}} className="navbar-brand header-title">We work for your comfort</p>                            
                            <Link to="/"><button className="btn btn-warning header-btn" type="button">Back <AiFillBackward /></button></Link>
                    </nav>
                    <form action='#' method="post" name="form" className='form' onSubmit={formik.handleSubmit} ref={id} onReset={formik.handleReset}>
                        <div className="h2"><VscAccount className='icon-login' /></div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="email" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.name && formik.errors.name && <small style={{color: 'red'}} className="form-text ">{formik.errors.name}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control" id="password" placeholder="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.password && formik.errors.password && <small style={{color: 'red'}} className="form-text ">{formik.errors.password}</small>}
                        </div>
                        <button type="submit" className="btn btn-secondary">Log in</button>
                    </form>
                    </div>
                    </div>
                    </div>
                </div>           
    );
}
import React from 'react';
import { VscAccount } from "react-icons/vsc";
import {useFormik} from 'formik';
import Title from './Title';

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
                    <Title />
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
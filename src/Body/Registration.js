import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import {useFormik} from 'formik';


export default function Registration(){

    const id=React.createRef();

    const validate = values=>{
        const errors={};

        if(!values.name){
            errors.name="required";
        }else if(values.name.length<3 || values.name.length>8){
            errors.name="should be 3-8 symbols";
        }

        if(!values.surname){
            errors.surname="required";
        }else if(values.surname.length<3 || values.surname.length>8){
            errors.surname="should be 3-8 symbols";
        }

        if(!values.email){
            errors.email="required";
        }else if(values.email.length<3){
            errors.email="should be more than 2 symbols";
        }

        if(!values.number){
            errors.number="required";
        }else if( !isFinite(values.number) ){
            errors.number="only number symbols required"
        }

        if(!values.country){
            errors.country="required";
        }else if(values.country.length<3){
            errors.country="should be more tnan 2 symbols";
        }

        if(!values.city){
            errors.city="required";
        }else if(values.city.length<3){
            errors.city="should be more tnan 2 symbols";
        }

        if(!values.street){
            errors.street="required";
        }else if(values.street.length<2){
            errors.country="should be more tnan 2 symbols";
        }

        if(!values.password){
            errors.password="required";
        }else if(values.password.length<3 || values.password.length>10){
            errors.password="should be 3-10 symbols";
        }

        if(!values.passconfirm){
            errors.passconfirm="required";
        }else if(values.passconfirm !==values.password){
            errors.passconfirm='your password doesn\'t match';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues:{
            name: '',
            surname: '',
            email: '',
            number: '',
            country: '',
            city: '',
            street: '',
            password: '',
            passconfirm: '',
        },
        validate,
        onSubmit: values=> {
            console.log(values);     // I don't have server:)
            id.current.reset();
        }
    });

    return(
        <div className="main">
            <div className="registration">
                    <div className="container">
                    <nav className="navbar navbar-light justify-content-left fixed-top">
                            <p style={{color: "#fff"}} className="navbar-brand header-title">We work for your comfort</p>                            
                            <Link to="/"><button className="btn btn-warning header-btn" type="button">Back <AiFillBackward /></button></Link>
                    </nav>
                    <form action='#' method="post" name="form" className='form' onSubmit={formik.handleSubmit} ref={id} onReset={formik.handleReset}>
                        <div className="h2"><VscAccount className='icon-login' /></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="username">Name</label>
                                    <input type="text" className="form-control" id="username" name="name" placeholder="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.name && formik.errors.name && <small style={{color: 'red'}} className="form-text ">{formik.errors.name}</small>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="surname">Surname</label>
                                    <input type="text" className="form-control" id="surname" placeholder="surname" name="surname" value={formik.values.surname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.surname && formik.errors.surname && <small style={{color: 'red'}} className="form-text -">{formik.errors.surname}</small>}
                                 </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.email && formik.errors.email && <small style={{color: 'red'}} className="form-text ">{formik.errors.email}</small>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="number">Phone number</label>
                                    <input type="text" className="form-control" id="number" placeholder="phone number" name="number" value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.number && formik.errors.number && <small style={{color: 'red'}} className="form-text">{formik.errors.number}</small>}
                                 </div>
                            </div>
                            <div><p>Adress</p></div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" className="form-control" id="country" name="country" placeholder="country" value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.country && formik.errors.country && <small style={{color: 'red'}} className="form-text ">{formik.errors.country}</small>}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control" id="city" placeholder="city" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.city && formik.errors.city && <small style={{color: 'red'}} className="form-text ">{formik.errors.city}</small>}
                                 </div>
                                <div className="col-md-4">
                                    <label htmlFor="city">Street</label>
                                    <input type="text" className="form-control" id="street" placeholder="street" name="street" value={formik.values.street} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.street && formik.errors.street && <small style={{color: 'red'}} className="form-text ">{formik.errors.street}</small>}
                                 </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.password && formik.errors.password && <small style={{color: 'red'}} className="form-text ">{formik.errors.password}</small>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="again">Confirm password</label>
                                    <input type="password" className="form-control" id="again" placeholder="password again" name="passconfirm" value={formik.values.passconfirm} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.passconfirm && formik.errors.passconfirm && <small style={{color: 'red'}} className="form-text ">{formik.errors.passconfirm}</small>}
                                 </div>
                            </div>
                            <button type="submit" className="btn btn-secondary">Registration</button>
                    </form>
                    </div>
                </div>           
            </div>
    );
}
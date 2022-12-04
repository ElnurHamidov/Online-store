import {useFormik} from 'formik';
import React from 'react';

export default function Header(){

    const id=React.createRef();

    const formik=useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: values=>{
            const a=values.search.toLowerCase();
            switch(a){
                case 'discount':
                window.location.href="#discount";
                id.current.search.value="";
                break;
                case 'contacts':
                window.location.href="#contacts";
                id.current.search.value="";
                break;
            }
        }
    });

    return(
        <div className="header">
                <nav className="navbar navbar-light justify-content-left fixed-top">
                    <div className="container">
                        <p style={{color: "#fff"}} className="navbar-brand header-title">We work for your comfort</p>
                        <form className="form-inline header-form" onSubmit={formik.handleSubmit} ref={id}>
                            <input value={formik.values.search} onChange={formik.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search"/>
                            <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

        </div>
    );
}


export default function Header(){

    return(
        <div className="header">
                <nav className="navbar navbar-light justify-content-left fixed-top">
                    <div className="container">
                        <p style={{color: "#fff"}} className="navbar-brand header-title">We work for your comfort</p>
                        <form className="form-inline header-form">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

        </div>
    );
}
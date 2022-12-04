import c1 from '../../images/card3.jpg';

export default function Card2(){


    return(
        
            <div className="card" style={{width: "18rem"}}>
                <div>
                    <img className="card-img-top" src={c1} alt="iron" style={{objectFit: 'cover'}}/>
                </div>
                <div>
                    <div className="card-body" style={{fontWeight: 'bold'}}>
                        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                            <h5 className="card-title fw-bold">Iron</h5>
                            <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>60$</span> <span>49$</span></p>
                        </div>
                        <p className="card-text">New iron made by Philips will make your work easier</p>
                        <a href="#" className="btn btn-warning card-btn">Buy</a>
                    </div>
                </div>
            </div>
    );
}
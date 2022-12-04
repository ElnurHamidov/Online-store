import c1 from '../../images/card12.jpg';

export default function Card12(){


    return(
        <div className="card" style={{width: "18rem"}}>
            <div>
                <img className="card-img-top" src={c1} alt="Pot" style={{objectFit: 'cover'}}/>
            </div>
            <div>
                <div className="card-body" style={{fontWeight: 'bold'}}>
                    <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                        <h5 className="card-title fw-bold">Dishwasher</h5>
                        <p className='card-text'>900$</p>
                    </div>
                    <p className="card-text">LG Dishwasher makes your life easier</p>
                    <a href="#" className="btn btn-warning card-btn">Buy</a>
                </div>
            </div>
        </div>
    );
}
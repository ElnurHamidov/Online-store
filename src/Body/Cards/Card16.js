import c1 from '../../images/card16.webp';

export default function Card16(){


    return(
        <div className="card" style={{width: "18rem"}}>
            <div>
                <img className="card-img-top" src={c1} alt="Pot" style={{objectFit: 'cover'}}/>
            </div>
            <div>
                <div className="card-body" style={{fontWeight: 'bold'}}>
                    <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                        <h5 className="card-title fw-bold">Fridge </h5>
                        <p className='card-text'>1550$</p>
                    </div>
                    <p className="card-text">New fridge designed by Bosh</p>
                    <a href="#" className="btn btn-warning card-btn">Buy</a>
                </div>
            </div>
        </div>
    );
}
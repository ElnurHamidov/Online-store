import c1 from '../images/card17.jpg';

export default function Card17(){


    return(
        <div className="card" style={{width: "18rem"}}>
            <div>
                <img className="card-img-top" src={c1} alt="Pot" style={{objectFit: 'cover'}}/>
            </div>
            <div>
                <div className="card-body" style={{fontWeight: 'bold'}}>
                    <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                        <h5 className="card-title fw-bold">Combi </h5>
                        <p className='card-text'>1250$</p>
                    </div>
                    <p className="card-text">Have in the store</p>
                    <a href="#" className="btn btn-warning card-btn">Buy</a>
                </div>
            </div>
        </div>
    );
}
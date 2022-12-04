import c1 from '../../images/card6.webp';

export default function Card6(){


    return(
        
            <div className="card" style={{width: "18rem"}}>
                <div>
                    <img className="card-img-top" src={c1} alt="iron" style={{objectFit: 'cover'}}/>
                </div>
                <div>
                    <div className="card-body" style={{fontWeight: 'bold'}}>
                        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                            <h5 className="card-title fw-bold">Washing machine</h5>
                            <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>700$</span> <span>599$</span></p>
                        </div>
                        <p className="card-text">Made by LG</p>
                        <a href="#" className="btn btn-warning card-btn">Buy</a>
                    </div>
                </div>
            </div>
    );
}
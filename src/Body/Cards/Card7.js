import c1 from '../../images/plate.jpg';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card7(){

    const obj=useContext(Context);

    return(
        
            <div className="card" style={{width: "18rem"}}>
                <div>
                    <img className="card-img-top" src={c1} alt="iron" style={{objectFit: 'cover'}}/>
                </div>
                <div>
                    <div className="card-body" style={{fontWeight: 'bold'}}>
                        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                            <h5 className="card-title fw-bold">Plate</h5>
                            <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>10$</span> <span>7.99$</span></p>
                        </div>
                        <p className="card-text">Have in the store</p>
                        <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 7,
                            name: 'Plate',
                            description: 'Have in the store',
                            price: '7.99',
                            count: 1,
                        })
                    }}>Buy</a>
                    </div>
                </div>
            </div>
    );
}
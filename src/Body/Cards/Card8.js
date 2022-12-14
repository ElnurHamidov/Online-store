import c1 from '../../images/card8.jpg';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card8(){


    const obj=useContext(Context);

    return(
        
            <div className="card" style={{width: "18rem"}}>
                <div>
                    <img className="card-img-top" src={c1} alt="iron" style={{objectFit: 'cover'}}/>
                </div>
                <div>
                    <div className="card-body" style={{fontWeight: 'bold'}}>
                        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                            <h5 className="card-title fw-bold">Knife</h5>
                            <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>12$</span> <span>9.99$</span></p>
                        </div>
                        <p className="card-text">Have in the store</p>
                        <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 8,
                            name: 'Knife',
                            description: 'Have in the store',
                            price: '9.99',
                            count: 1,
                        })
                    }}>Buy</a>
                    </div>
                </div>
            </div>
    );
}
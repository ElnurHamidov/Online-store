import c1 from '../../images/card16.webp';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card16(){

    const obj=useContext(Context);

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
                    <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 16,
                            name: 'Fridge',
                            description: 'New fridge designed by Bosh',
                            price: '1550',
                            count: 1,
                        })
                    }}>Buy</a>
                </div>
            </div>
        </div>
    );
}
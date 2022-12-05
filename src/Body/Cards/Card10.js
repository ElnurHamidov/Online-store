import c1 from '../../images/card10.jpg';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card10(){


    const obj=useContext(Context);

    return(
        <div className="card" style={{width: "18rem"}}>
            <div>
                <img className="card-img-top" src={c1} alt="Pot" style={{objectFit: 'cover'}}/>
            </div>
            <div>
                <div className="card-body" style={{fontWeight: 'bold'}}>
                    <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                        <h5 className="card-title fw-bold">Air conditioner</h5>
                        <p className='card-text'>700$</p>
                    </div>
                    <p className="card-text">New design from LG</p>
                    <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 10,
                            name: 'Air conditioner',
                            description: 'New design from LG',
                            price: '700',
                            count: 1,
                        })
                    }}>Buy</a>
                </div>
            </div>
        </div>
    );
}
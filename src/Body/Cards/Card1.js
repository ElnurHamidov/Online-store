import c1 from '../../images/card1.jpg';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card1(){

    const obj = useContext(Context);

    return(
        <div className="card" style={{width: "18rem"}}>
            <div>
                <img className="card-img-top" src={c1} alt="Pot" style={{objectFit: 'cover'}}/>
            </div>
            <div>
                <div className="card-body" style={{fontWeight: 'bold'}}>
                    <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                        <h5 className="card-title fw-bold">Pot</h5>
                        <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>30$</span> <span>19$</span></p>
                    </div>
                    <p className="card-text">This modern pot will easy fit your home design</p>
                    <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 1,
                            name: 'Pot',
                            description: 'This modern pot will easy fit your home design',
                            price: '30',
                            count: 1,
                        })
                    }}>Buy</a>
                </div>
            </div>
        </div>
    );
}
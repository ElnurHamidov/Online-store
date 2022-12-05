import c1 from '../../images/card5.jpeg';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card5(){

    const obj=useContext(Context);


    return(
        
            <div className="card" style={{width: "18rem"}}>
                <div>
                    <img className="card-img-top" src={c1} alt="iron" style={{objectFit: 'cover'}}/>
                </div>
                <div>
                    <div className="card-body" style={{fontWeight: 'bold'}}>
                        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                            <h5 className="card-title fw-bold">Vacuum cleaner</h5>
                            <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>300$</span> <span>259$</span></p>
                        </div>
                        <p className="card-text">New technology mixed with comfort</p>
                        <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 5,
                            name: 'Vacuum cleaner',
                            description: 'New technology mixed with comfort',
                            price: '259',
                            count: 1,
                        })
                    }}>Buy</a>
                    </div>
                </div>
            </div>
    );
}
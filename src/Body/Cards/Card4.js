import c1 from '../../images/clock.webp';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card4(){

    const obj=useContext(Context);


    return(
        
            <div className="card" style={{width: "18rem"}}>
                <div>
                    <img className="card-img-top" src={c1} alt="iron" style={{objectFit: 'cover'}}/>
                </div>
                <div>
                    <div className="card-body" style={{fontWeight: 'bold'}}>
                        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                            <h5 className="card-title fw-bold">Clock</h5>
                            <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>200$</span> <span>149$</span></p>
                        </div>
                        <p className="card-text">Smart clock by Apple</p>
                        <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 4,
                            name: 'Clock',
                            description: 'Smart clock by Apple',
                            price: '149',
                            count: 1,
                        })
                    }}>Buy</a>
                    </div>
                </div>
            </div>
    );
}
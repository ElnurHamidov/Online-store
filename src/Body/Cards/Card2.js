import c1 from '../../images/card2.jpeg';
import {useContext} from 'react';
import Context from "../../Context";

export default function Card2(){

    const obj=useContext(Context);

    return(
        
            <div className="card" style={{width: "18rem"}}>
                <div style={{flex: '0 0 50px'}}>
                    <img className="card-img-top" src={c1} alt="Pot" />
                </div> 
                <div>  
                    <div className="card-body" style={{fontWeight: 'bold'}}>
                        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                            <h5 className="card-title fw-bold">Hair dryer</h5>
                            <p className='card-text'><span style={{textDecoration: 'line-through', color: 'red'}}>80$</span> <span>70$</span></p>
                        </div>
                        <p className="card-text">Last one in the store</p>
                        <a className="btn btn-warning card-btn" onClick={()=>{
                       const confirm=window.confirm('Add to storage?');
                       if(confirm) obj.onAdd({
                            id: 2,
                            name: 'Hair dryer',
                            description: 'Last one in the store',
                            price: '70',
                            count: 1,
                        })
                    }}>Buy</a>
                    </div>
                    </div>
                </div>
    );
}
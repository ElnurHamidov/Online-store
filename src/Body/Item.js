import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import {useContext} from 'react';
import Context from "../Context";

export default function Item(props){

    const obj =useContext(Context);

    return(
        <div className="item">
            <div>   
                <p><span className="fw-bold" >Product:</span> {props.value.name}</p>
                <p><span className="fw-bold" >About: </span>{props.value.description}</p>
                <p><span className="fw-bold" >Price: </span>{props.value.price} $</p>
                <p><span className="fw-bold" >Count: </span>{props.value.count}</p>
            </div>
            <div>
                <AiOutlineArrowDown className="icon-bt" onClick={()=>obj.onDecrease(props.value.id)} />
                <AiOutlineArrowUp className="icon-bt" onClick={()=>obj.onIncrease(props.value.id)}/>
                <BsFillTrashFill style={{color: 'red'}} className="icon-bt" onClick={()=>{
                    const confirm=window.confirm('Remove item?');
                    if(confirm) obj.onDelete(props.value.id)}
                    } />
            </div>
        </div>
    );
}
import { HiLocationMarker } from "react-icons/hi";
import { DiMitlicence } from "react-icons/di";
import { BsFillTelephoneForwardFill } from "react-icons/bs";


export default function About(){

    return(
        <div className="about">
            <div className="container">
                <div className="h2 fw-bold" >Our service</div>
                <p>Our network of stores provides customer service around the world. We work hard for quality.
                You can place an order from home, and if we do not bring your goods within an hour, we will refund your money.
                Payment is also possible by card, for which you will receive 5% cashback.</p>
                <div className="h2 fw-bold">Location</div>
                <p><HiLocationMarker /> Main office:  Baku, Azerbaijan. Oktay Shabanov str. 56/6</p>                
                <p><DiMitlicence /> Licence: Mit-2022</p>
                <p><BsFillTelephoneForwardFill /> For more information:  +994708221706</p>
            </div>
        </div>
    );
}
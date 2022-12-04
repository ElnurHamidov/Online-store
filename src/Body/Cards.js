import Card1 from "./Card1";
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from './Card8';
import Card9 from "./Card9";

export default function Cards(){

    return(
        <div className="cards"  id="discount">
            <div className="container">
                <div className="h2 fw-bold" style={{textAlign: 'center'}}>Now on discount</div>
                <div className="cards-row">
                            <Card1 />
                            <Card2 />
                            <Card3 />
                            <Card4/>
                            <Card5/>
                            <Card6 />
                            <Card7 />
                            <Card8/>
                            <Card9 />
                </div>
                    </div>
                        
                </div>

    );
}
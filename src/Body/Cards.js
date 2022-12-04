import Card1 from "./Cards/Card1";
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Card4 from './Cards/Card4';
import Card5 from './Cards/Card5';
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from './Cards/Card8';
import Card9 from "./Cards/Card9";

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
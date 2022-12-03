import Card1 from "./Card1";
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';

export default function Cards(){

    return(
        <div className="cards" style={{background: 'rgba(0, 0, 0, .1)'}}>
            <div className="container">
                <div className="h2 fw-bold" style={{textAlign: 'center'}}>Now on discount</div>
                <div className="cards-row">
                            <Card1 />
                            <Card2 />
                            <Card3 />
                            <Card4/>
                            <Card5/>
                </div>
                    </div>
                        
                </div>

    );
}
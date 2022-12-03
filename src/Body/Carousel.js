import Carousel from 'react-bootstrap/Carousel';
import ph1 from '../images/slide1.jpg';
import ph2 from '../images/slide2.jpeg';
import ph3 from '../images/slide5.jpg';

function Carousels() {

    const obj = {
        background: "rgba(0, 0, 0, .6)",
        position: 'absolute',
        width: '100%' , 
        height: '100%' , 
        top: '0' , 
        left: '0', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' , 
        fontSize: '20px' , 
        letterSpacing: '5px'
    }

  return (
            <Carousel className="carousel">
            <Carousel.Item style={{position: 'relative'}}>
                <img
                className="d-block w-100"
                src={ph1}
                alt="First slide"
                />
                <Carousel.Caption style={obj}>
                <div>
                    <h3>Easy access</h3>
                    <p>House of your dream</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item style={{position: 'relative'}}>
                <img
                className="d-block w-100"
                src={ph2}
                alt="Second slide"
                />

                <Carousel.Caption style={obj}>
                <div>
                    <h3>Buy from home</h3>
                    <p>Variety of furniture choices</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{position: 'relative'}}>
                <img
                className="d-block w-100"
                src={ph3}
                alt="Third slide"
                />

                <Carousel.Caption style={obj}>
                <div>
                    <h3>Fast service</h3>
                <p>
                    Make your own home comfort
                </p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
  );
}

export default Carousels;
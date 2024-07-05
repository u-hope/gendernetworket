import './Headers.css';
import { Link } from 'react-router-dom';
import one from "../../Img/mask.png";
import two from "../../Img/hero_shape.png";
import three from "../../Img/elements.png";
import four from "../../Img/people.png";

const Headers = () => {

    return (
        <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
          <div style={{ position: 'relative' }} className='headerContainer'>
            <img
              className='one'
              src={one}
              alt="Image 1"
              style={{ position: 'absolute', zIndex: 0 }}
            />
            <img
              className='two'
              src={two}
              alt="Image 2"
              style={{ position: 'absolute',  zIndex: 1 }}
            />
            <img
              className='three'
              src={three}
              alt="Image 3"
              style={{ position: 'absolute', zIndex: 2 }}
            />
            <img
              className='four'
              src={four}
              alt="Image 4"
              style={{ position: 'absolute',  zIndex: 3 }}
            />
          </div>
         
        </div>
      );};

export default Headers;

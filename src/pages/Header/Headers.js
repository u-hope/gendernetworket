import './Headers.css';
import backImg from '../../Img/deepBack.png';
import mask from '../../Img/mask.png';
import heroShape from '../../Img/hero_shape.png';
import elements from '../../Img/elements.png';
import people from '../../Img/people.png';
import triangle from '../../Img/triangle.png';
import { Link } from 'react-router-dom';

const Headers = () => {

	return (
		<div className="header">
            <div className='headerCover'>
                <img src={backImg} alt='background_1' className='parallax parallax_1'/>
                <img src={mask} alt='background_1' className='parallax parallax_2'/>
                <img src={heroShape} alt='background_1' className='parallax parallax_3'/>
                <img src={elements} alt='background_1' className='parallax parallax_4'/>
                <img src={people} alt='background_1' className='parallax parallax_5'/>
                <img src={triangle} alt='background_1' className='parallax parallax_6'/> 
                <div className='headerLeft'> 

                <span className='headerTopText'>
                    We believe in fostering a diverse and inclusive
                    <br/> community where individuals of all gender can 
                    <br/> connect, collaborate and thrive. Together, let's 
                    <br/> break barriers and create a more equitable
                    <br/> future.
                </span>       
                
                <span className='headerText'>
                    Equal Representation, Equal Society.
                </span>
                <Link to="/signup" className="headerButton">
                    Register with us
                </Link>
            </div> 
            </div>
            
        </div>
	);
};

export default Headers;

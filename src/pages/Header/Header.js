import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<div className="header">
            <div className='headerCover'>
            </div>
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
	);
};

export default Header;

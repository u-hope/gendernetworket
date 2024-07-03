import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<div className="header">
            <div className='headerCover'>
            </div>
            <div className='headerLeft'> 

                <span className='headerTopText'>Empowering organizations <br/>working on gender-related<br/> issues worldwide</span>       
                <span className='headerText'>Equal Representation, Equal Society.</span>
                <Link to="/signup" className="headerButton">
                    Register with us
                </Link>
            </div> 
            </div>
	);
};

export default Header;

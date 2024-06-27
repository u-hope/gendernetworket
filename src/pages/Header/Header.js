import './Header.css';

const Header = () => {

	return (
		<div className="header">
            
            <div className='headerCover'>
            </div>
            <div className='headerLeft'>        
                <span className='headerText'>Equal Representation, Equal Society.</span>
                <a className='headerButton' href='/signup'>Register with us</a>
            </div> 
           
		</div>
	);
};

export default Header;

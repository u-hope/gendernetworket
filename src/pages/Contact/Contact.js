import './Contact.css';
import gizLogo from '../../Img/gizLogo.png';
import emailIcon from '../../Img/emailIcon.png';
import phoneIcon from '../../Img/phoneIcon.png';

const Contact = () =>{
    return(
        <div className='contact'>
            <div className='contactLeft'>
                <img src={gizLogo} alt='logo'/>
            </div>
            <div className='contactRight'>
                <div className='email'>
                    <img alt='email icon' src={emailIcon} className='emailIcon'/>
                    <span className='spanEmail'>gendernetworkethiopia@gmail.com</span>
                </div>
                <div className='phoneNumber'>
                    <img alt='Phone icon' src={phoneIcon} className='phoneIcon'/>
                    <span className='spanPhone'>+2519-458-xxxx-xx</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
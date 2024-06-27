import Map from '../../Components/Maps/Map';
import NavBar from '../../Components/NavBar/Navbar';
import logoImg from '../../Img/logo.png';
import Header from '../Header/Header';
import './home.css';
import Card from '../../Components/Card/Cards';
import Contact from '../Contact/Contact';

const Home =() => {
    return(
        <div>
            <NavBar logoImg={logoImg}/>
            <Header/>
            <Map/>
            <Card cardImg={logoImg}/>
            <Contact/>
        </div>
    )
}

export default Home;
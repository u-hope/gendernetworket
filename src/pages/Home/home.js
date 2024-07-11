import Map from '../../Components/Maps/Map';
import NavBar from '../../Components/NavBar/Navbar';
import logoImg from '../../Img/logo.png';
import Header from '../Header/Header';
import About from '../about/about';
import Parallex from '../../Components/parallex/parallex';
import './home.css';
import Card from '../../Components/Card/Cards';
import Contact from '../Contact/Contact';
import Slider from '../../Components/Slider/Slider';

const Home =() => {
    return(
        <div>
            <NavBar logoImg={logoImg}/>
            <Header/>
            <About/>
            <Map/>
            <Card cardImg={logoImg}/>
            <Parallex/>
            <Slider/>
            <Contact/>
        </div>
    )
}

export default Home;
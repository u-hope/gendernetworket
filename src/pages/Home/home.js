import Map from '../../Components/Maps/Map';
import NavBar from '../../Components/NavBar/Navbar';
import logoImg from '../../Img/logo.png';
import homeImg from '../../Img/home.png'
import Header from '../Header/Header';
import About from '../about/about';
import Parallex from '../../Components/parallex/parallex';
import './home.css';
import Card from '../../Components/Card/Cards';
import Contact from '../Contact/Contact';
import Slider from '../../Components/Slider/Slider';

const Home =() => {
    return(
        <div style={{
            height:"100vh",scrollSnapType:"y proximity",overflowY:"scroll"
        }}>
            <NavBar logoImg={homeImg}/>
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
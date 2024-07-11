import './Slider.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CardSlide from '../CardSlide/cardSlide';
import img from '../../Img/gizLogo.png';
import agriculture from '../../Img/gender/ag.png';
import aor from '../../Img/gender/aor.png';
import ata from '../../Img/gender/ata.png';
import care from '../../Img/gender/care.png';
import egpa from '../../Img/gender/egpa.png';
import gen from '../../Img/gender/gen.png';
import genderland from '../../Img/gender/genderland.jpg';
import geng from '../../Img/gender/geng.jpg';
import moa from '../../Img/gender/moa.png';
import msi from '../../Img/gender/msi.png';
import peace from '../../Img/gender/peace.jpg';
import un from '../../Img/gender/un.png';
import un_min from '../../Img/gender/un_min.png';
import wom from '../../Img/gender/wom.jpg';
import womeb from '../../Img/gender/womeb.jpg';
import womendigital from '../../Img/gender/womendigital.png';
import womn from '../../Img/gender/womn.jpg';
import igc from '../../Img/gender/igc.png';
import maristops from '../../Img/gender/maristops.png';
import usaid from '../../Img/gender/usaid.png';

const Slider = ()=>{
    
  const [respo, setRespo] = useState([]);
//   const [organization, setOrganization] = useState([]);

    useEffect(() => {
        axios.get("https://gendernetworkethiopia-api.onrender.com/api/data")
            .then(response => {
                setRespo(response.data);
            })
            .catch(error => console.error('Error fetching notes:', error));
    }, []);

    

    return(
        <div className='sliderTop'>

<div className='sliderContainer'>
            <ul class="slider blur">
                <li>
                    <CardSlide name={"Giz"} img={img}/>
                    <CardSlide name={"Ministry of Agriculture"} img={agriculture}/>
                    <CardSlide name={"Ethiopian agriculture Ministry"} img={aor}/>
                    <CardSlide name={"Agriculture Transformation Agency"} img={ata}/>
                    <CardSlide name={"Care Ethiopia"} img={care}/>
                    <CardSlide name={"EGPA"} img={egpa}/>
                    <CardSlide name={"Giz"} img={img}/>
                    <CardSlide name={"Ministry of Agriculture"} img={agriculture}/>
                    <CardSlide name={"Ethiopian agriculture Ministry"} img={aor}/>
                    <CardSlide name={"Agriculture Transformation Agency"} img={ata}/>
                    <CardSlide name={"Care Ethiopia"} img={care}/>
                    <CardSlide name={"EGPA"} img={egpa}/>  
                    <CardSlide name={"Giz"} img={img}/>
                    <CardSlide name={"Ministry of Agriculture"} img={agriculture}/>
                    <CardSlide name={"Ethiopian agriculture Ministry"} img={aor}/>
                    <CardSlide name={"Agriculture Transformation Agency"} img={ata}/>
                    <CardSlide name={"Care Ethiopia"} img={care}/>
                    <CardSlide name={"EGPA"} img={egpa}/>  
                </li>
                
            </ul>
        </div>


        <div className='sliderContainer'>
            <ul class="slider blur">
               
                <CardSlide name={"Ministry of Women, Children and Youth"} img={gen}/>
                <CardSlide name={"Gender Action"} img={genderland}/>
                <CardSlide name={"Gender Equality Ethiopia"} img={geng}/>
                <CardSlide name={"Men Engage Ethiopia"} img={moa}/>
                <CardSlide name={"MSI"} img={msi}/>
                <CardSlide name={"Ministry of Peace"} img={peace}/>
                <CardSlide name={"United Nation"} img={un}/>
                <CardSlide name={"United Nation Women Ethiopia"} img={un_min}/>
                <CardSlide name={"Ministry of Women, Children and Youth"} img={gen}/>
                <CardSlide name={"Gender Action"} img={genderland}/>
                <CardSlide name={"Gender Equality Ethiopia"} img={geng}/>
                <CardSlide name={"Men Engage Ethiopia"} img={moa}/>
                <CardSlide name={"MSI"} img={msi}/>
                <CardSlide name={"Ministry of Peace"} img={peace}/>
                <CardSlide name={"United Nation"} img={un}/>
                <CardSlide name={"United Nation Women Ethiopia"} img={un_min}/>
                <CardSlide name={"Ministry of Women, Children and Youth"} img={gen}/>
                <CardSlide name={"Gender Action"} img={genderland}/>
                <CardSlide name={"Gender Equality Ethiopia"} img={geng}/>
                <CardSlide name={"Men Engage Ethiopia"} img={moa}/>
                <CardSlide name={"MSI"} img={msi}/>
                <CardSlide name={"Ministry of Peace"} img={peace}/>
                <CardSlide name={"United Nation"} img={un}/>
                <CardSlide name={"United Nation Women Ethiopia"} img={un_min}/>
                <CardSlide name={"Ministry of Women, Children and Youth"} img={gen}/>
                <CardSlide name={"Gender Action"} img={genderland}/>
                <CardSlide name={"Gender Equality Ethiopia"} img={geng}/>
                <CardSlide name={"Men Engage Ethiopia"} img={moa}/>
                <CardSlide name={"MSI"} img={msi}/>
                <CardSlide name={"Ministry of Peace"} img={peace}/>
                <CardSlide name={"United Nation"} img={un}/>
                <CardSlide name={"United Nation Women Ethiopia"} img={un_min}/>
            </ul>

            
        </div>


        

        <div className='sliderContainer'>
            <ul class="slider blur">
               
                <CardSlide name={"WOMEN"} img={wom}/>
                <CardSlide name={"Women and Child walefare and developemnt"} img={womeb}/>
                <CardSlide name={"Women's Digital Financial Inclution"} img={womendigital}/>
                <CardSlide name={"Ministry of women and Social Affairs"} img={womn}/>
                <CardSlide name={"USAID"} img={usaid}/>
                <CardSlide name={"International Growth Center"} img={igc}/>
                <CardSlide name={"Maristops Ethiopia"} img={maristops}/>
                <CardSlide name={"WOMEN"} img={wom}/>
                <CardSlide name={"Women and Child walefare and developemnt"} img={womeb}/>
                <CardSlide name={"Women's Digital Financial Inclution"} img={womendigital}/>
                <CardSlide name={"Ministry of women and Social Affairs"} img={womn}/>
                <CardSlide name={"USAID"} img={usaid}/>
                <CardSlide name={"International Growth Center"} img={igc}/>
                <CardSlide name={"Maristops Ethiopia"} img={maristops}/>
                <CardSlide name={"WOMEN"} img={wom}/>
                <CardSlide name={"Women and Child walefare and developemnt"} img={womeb}/>
                <CardSlide name={"Women's Digital Financial Inclution"} img={womendigital}/>
                <CardSlide name={"Ministry of women and Social Affairs"} img={womn}/>
                <CardSlide name={"USAID"} img={usaid}/>
                <CardSlide name={"International Growth Center"} img={igc}/>
                <CardSlide name={"Maristops Ethiopia"} img={maristops}/>
            </ul>
        </div>


        </div>
    )
}

export default Slider;
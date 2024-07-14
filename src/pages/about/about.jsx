import React, { useRef, useEffect, useState } from 'react';
import './about.css';

function About(props) {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);

    // Add click event listeners to the .aboutImg elements
    const aboutImgs = document.querySelectorAll('.aboutImg');
    aboutImgs.forEach((aboutImg) => {
      aboutImg.addEventListener('click', (e) => {
        removeActiveClasses();
        aboutImg.classList.add('active');
      });
    });

    // Clean up the event listeners on component unmount
    return () => {
      aboutImgs.forEach((aboutImg) => {
        aboutImg.removeEventListener('click', (e) => {
          removeActiveClasses();
          aboutImg.classList.add('active');
        });
      });
    };
  }, []);

  function removeActiveClasses() {
    const aboutImgs = document.querySelectorAll('.aboutImg');
    aboutImgs.forEach((aboutImg) => {
      aboutImg.classList.remove('active');
    });
  }

  return (
    <div className="about_main">
      <div className="about_top">
        <div className="about_title" style={{color:"#00859B"}}>About Us</div>
        <div className="about_body" style={{textAlign:"center",color:"rgba(76, 115, 173, 0.514)"}}>
        {/* We work to increase the visibility and awareness of gender equality issues while elevating the voices of underrepresented communities. We do this by facilitating networking and collaboration between a wide range of organizations, NGOs, and advocates in order to foster synergies and collective action. We also support grassroots movements in influencing policy and driving systemic change through strategic advocacy efforts. By making essential resources, educational materials, and empowering tools easily accessible, we empower individuals and strengthen the capacity of gender equality champions.  */}
        In order to create synergies and collective action, we facilitate collaboration and networking between a diverse range of organizations, NGOs, and advocates. We also support grassroots movements in influencing policy and driving systemic change through strategic advocacy efforts. Our mission is to increase visibility and awareness of gender equality issues, amplifying the voices of underrepresented communities.
        </div>
         </div> 
      <div className={`about_bottom ${myElementIsVisible ? 'aboutanim' : 'about'}`} ref={myRef}>
        <div className="aboutContainer">
          <div className="aboutImg One ">
            <p>Enhance Visibility and Awareness</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Two">
            <p>Facilitate Collaboration and Networking</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Three active">
            <p>Streamline Access to Resources</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Four">
            <p>Support Capacity Building</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Five">
            <p>Influence Policy and Advocacy</p>
            <span id='textTool'>Click to View</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
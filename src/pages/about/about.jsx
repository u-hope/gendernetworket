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
        Our mission is to enhance visibility and awareness of gender equality issues, amplifying the voices of underrepresented communities. We facilitate collaboration and networking between a diverse range of organizations, NGOs, and advocates to foster synergies and collective action. By streamlining access to essential resources, educational materials, and empowering tools, we empower individuals and strengthen the capacity of gender equality champions. We support grassroots movements in influencing policy and driving systemic change through strategic advocacy efforts. Join our movement as we work together to build a more equitable and inclusive world for all.
        </div>
      </div>
      <div className={`about_bottom ${myElementIsVisible ? 'aboutanim' : 'about'}`} ref={myRef}>
        <div className="aboutContainer">
          <div className="aboutImg One ">
            <p>Enhance Visibility and Awareness</p>
          </div>
          <div className="aboutImg Two">
            <p>Facilitate Collaboration and Networking</p>
          </div>
          <div className="aboutImg Three active">
            <p>Streamline Access to Resources</p>
          </div>
          <div className="aboutImg Four">
            <p>Support Capacity Building</p>
          </div>
          <div className="aboutImg Five">
            <p>Influence Policy and Advocacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
import React, { useEffect, useRef } from 'react';
import './Header.css';
import backImg from '../../Img/deepBack.png';
import mask from '../../Img/mask.png';
import heroShape from '../../Img/hero_shape.png';
import elements from '../../Img/elements.png';
import people from '../../Img/people.png';
import triangle from '../../Img/triangle.png';
import { Link } from 'react-router-dom';

const Parallax = ({ className, speed, imgSrc }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const y = (window.scrollY * speed) / 100;
      element.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      <img src={imgSrc} alt={imgSrc} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="headerCover">
        <Parallax className="parallax parallax_1" speed={-10} imgSrc={backImg} />
        <Parallax className="parallax parallax_2" speed={-20} imgSrc={mask} />
        <Parallax className="parallax parallax_3" speed={-15} imgSrc={heroShape} />
        <Parallax className="parallax parallax_4" speed={-25} imgSrc={elements} />
        <Parallax className="parallax parallax_5" speed={-18} imgSrc={people} />
        <Parallax className="parallax parallax_6" speed={-30} imgSrc={triangle} />
        <div className="headerLeft">
          <span className="headerTopText">
            We believe in fostering a diverse and inclusive
            <br /> community where individuals of all gender can
            <br /> connect, collaborate and thrive. Together, let's
            <br /> break barriers and create a more equitable
            <br /> future.
          </span>
          <span className="headerText">Equal Representation, Equal Society.</span>
          <Link to="/signup" className="headerButton">
            Register with us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
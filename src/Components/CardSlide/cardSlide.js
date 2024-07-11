import './cardSlide.css';

const CardSlide = (props)=>{
    return(
        <div className='cardSlide'>
            <div className='cardSlideImg'>
                <img src={props.img}/>
            </div>
            <div className='cardSlideName'><h2>{props.name}</h2></div>
        </div>
    );
}

export default CardSlide;
import React,{useState}from 'react'
import {SliderData} from './homeitems';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import '../components/Homebody.css'
const HomeBody = ({slides}) => {
    const [current,setCurrent]=useState(0)
    const length= slides.length

    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1)
    };
    console.log(current);
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1);
    }
    console.log(current);
    if (!Array.isArray(slides) || slides.length<=0){
        return null;
    }


    return (
       <section className='slider'>
           <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
           <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
       {SliderData.map((slide,index)=>{
           return (
               <div className={index===current?'slide-active':'slide'} key={index}>
                   {index===current && (
                       <img className='slider-image' src={slide.image} alt={slide.altname}/>
                   )}
                   
               </div>
               
           )
       })}
       </section>
    );
};

export default HomeBody

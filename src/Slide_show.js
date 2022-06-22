import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React, { useRef, useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Slide_show.css";
import Slider_Section from "./Slider_Section"

const Slide_show = ({key,datas}) => {
  
  const slideRef = useRef();

  const properties = {
    autoplay: false,
    arrows: false,
    // infinite: false,
    
  };

  const [count, setCount]=useState(0) 
  
  const back = () => {
    slideRef.current.goBack();
    setCount(prevcount=>prevcount-1)
  }

  const next = () => {
    slideRef.current.goNext();
    setCount(prevcount=>prevcount+1)
  }

  
  return (
    <>
      <Slide ref={slideRef} {...properties}>
      {
        datas.map((data, index) => (
          <Slider_Section 
            key={index}
            title={data.Fname}
            img = {data.Fimg}
            theme = {data.Ftheme}
            release = {data.Frelease}
            description = {data.Fdescription}
          />
          
        ))
      } 
      
      </Slide>
      <div className="nextandpre">
        <div className="next">
            <button className="nextbtn" onClick={next}>Next <ArrowForward style={{fontSize:'30px'}}/></button>
        </div> 
        <div className="previous">
          <button className="prebtn" onClick={back}><ArrowBack style={{fontSize:'30px'}}/>  Previous </button>
        </div>
      </div>
    </>
  )
};

export default Slide_show;
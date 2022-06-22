import React from 'react'
import {forwardRef} from 'react';
import './Thumbnail.css';
import ScrollContainer from 'react-indiana-drag-scroll'


const Thumbnail = forwardRef(({datas}, ref)=> {
  return (
    <ScrollContainer className ="thumbnail" ref={ref} >
      {
        datas.map((data, key) => {
          return (
            <div className="slider_img">
              <img src={data.img} data-loaded="true" alt={data.title} />
            </div>
          );

      })}
        
    </ScrollContainer>
  )
})

export default Thumbnail
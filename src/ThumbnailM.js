import React from 'react'
import {forwardRef} from 'react';
import './ThumbnailM.css';
import ScrollContainer from 'react-indiana-drag-scroll'


const ThumbnailM = forwardRef(({datas}, ref)=> {
  return (
    <ScrollContainer className ="thumbnailM" ref={ref} >
      {
        datas.map((data, key) => {
          return (
            <div className="slider_imgM">
              <img src={data.img} data-loaded="true" alt={data.title} />
            </div>
          );

      })}
        
    </ScrollContainer>
  )
})

export default ThumbnailM
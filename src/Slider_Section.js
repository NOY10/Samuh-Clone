import { AccessTime, PlayArrow } from '@material-ui/icons'
import React from 'react'
import dot from './img/dot.png';
import social from "./img/social-icon.png";
import './Slider_Section.css'


function Slider_Section({key,title,img,theme,release,description}) {
  return (
    <div className="slider_section" key={key}>
      <img src={img} alt="thumbnail" />
        <div className="slider_lower">
          <div className="slider_content">
              <div className="name">
                  <h3>{title}</h3>
              </div>
              
              <p style={{'fontSize':"18px"}}>{theme}</p>
              <div className="year_time">
                  <p style={{"marginRight":"15px",'fontSize':"18px"}}>{release}</p>
                  <AccessTime style={{"color":"rgba(168, 254, 48,0.4)","marginRight":"10px"}}/>
                  <p>01h 40</p>
              </div>
              <p>U</p>
              <p>{description}</p>
            <div className="playButtons">
              <div className="slider_playButton"><PlayArrow /></div>
              <div className="social">
                <div className="slider_playButton"><img src={dot}/></div>
                <img className="socialIcon" src={social} />
            </div>
              <div className="watch" style={{"fontWeight":"500",'fontSize':"18px"}}>Add to Watchlist</div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Slider_Section
import {home} from './samuhdata/data'
import './Homepage.css'
import Thumbnail from './Thumbnail'
import ThumbnailM from './ThumbnailM'
import Lower from './Lower'
import SlideShow from './Slide_show';
import { Add } from '@material-ui/icons'

function Homepage() {
  
  return (
    <div className="homepage">
    {
      home.map((data, key) => (
        <SlideShow 
          key={key} 
          datas={data.slider_img} 
        />
      ))
    } 
      
      
      {
        home.map((data, key) => {
            return (
              <>
              <div className="titdiv">
                <p className="title">Samuh Originals</p>
                <div className="add">
                  <button />
                  <Add />
                </div>
              </div>
              
              <Thumbnail 
                key={key} 
                datas={data.Samuh_Originals} 
              />   
              <div className="titdiv">
                <p className="title">Coming Soon</p>
                <div className="add">
                  <button />
                  <Add />
                </div>
              </div>
              <Thumbnail 
                key={key} 
                datas={data.Coming_Soon} 
              />
              <div className="titdiv">
                <p className="title">New release</p> 
                <div className="add">
                  <button />
                  <Add />
                </div>
              </div>  
              <ThumbnailM
                key={key}
                datas={data.New_release}
              />
              <div className="titdiv">
                <p className="title">Movies</p> 
                <div className="add">
                  <button />
                  <Add />
                </div>
              </div>
              <ThumbnailM
                key={key}
                datas={data.Movies}
              />
              <div className="titdiv">
                <p className="title">Series</p> 
                <div className="add">
                  <button />
                  <Add />
                </div>
              </div>
              <ThumbnailM
                key={key}
                datas={data.Series}
              />
              <div className="titdiv">
                <p className="title">Kids</p> 
                <div className="add">
                  <button />
                  <Add />
                </div>
              </div>
              <ThumbnailM
                key={key}
                datas={data.Kids}
              /> 
              <div className="titdiv">
                <p className="title">Trending on Samuh</p>
                <div className="add">
                  <button />
                  <Add />
                </div>
              </div>
              <ThumbnailM
                key={key}
                datas={data.Trending_on_Samuh}
              />
              </>
                
            );
      })}

    <Lower />
        
    </div>
  )
}

export default Homepage
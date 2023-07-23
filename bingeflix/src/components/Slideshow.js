import "./Slideshow.css"
import { useState } from "react"
import poster1 from "../images/poster-1.jpeg"
import poster2 from "../images/poster-2.jpg"
import poster3 from "../images/poster-3.jpg"
import poster4 from "../images/poster-4.jpeg"

const Slideshow = () => {
    const [poster, setPoster] = useState(0);
    let posterImg;
    switch (poster) {
        case 0:
            setPoster(4);
            break;
        case 1:
            posterImg = poster1;
            break;
        case 2:
            posterImg = poster2;
            break;
        case 3:
            posterImg = poster3;
            break;
        case 4:
            posterImg = poster4;
            break;
        case 5:
            setPoster(1);
            break;
        default:
            break;
    }
    return(
        <div className="slideshow">
            <h1 className='slideshow-title'>Box Office</h1>
            <div className="slideshow-div">
                <button onClick={() => setPoster(poster - 1)} className="slideshow-left">{"<"}</button>
                <div className="slideshow-poster-div">
                    <img className="slideshow-poster" alt="Movie poster" src={posterImg}/>
                </div>
                <button onClick={() => setPoster(poster + 1)} className="slideshow-right">{">"}</button>
            </div>
        </div>
    )
}
export default Slideshow;

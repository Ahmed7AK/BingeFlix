import "./InfoSection.css"
import noSpoilers from "../images/no-spoilers.png"
import streamingServices from "../images/streaming-services.png"
import nineMillionPlus from "../images/9m+.png"

const InfoSection = () => {
    return (
        <div className="info-div">
            <div className="info">
                <div className="info-text">
                    <h2 className="info-title">Find movies with 0 spoilers</h2>
                    <p className="info-p">Binge Flix has a huge catalogue of movies and series. Our selection dont contain any spoilers except for the poster and actors in each page. </p>
                </div>
                <img className="no-spoilers-img" src={noSpoilers} alt="no spoilers" />
            </div>
            <div className="info">
                <div className="info-text">
                    <h2 className="info-title">Enjoy watching your shows</h2>
                    <p className="info-p">Using “My List” you can save movies and series to watch later without losing track of them.</p>
                </div>
                <img className="streaming-services-img" src={streamingServices} alt="Famous Streaming Services" />
            </div>
            <div className="info">
                <div className="info-text">
                    <h2 className="info-title">Huge selection of movies</h2>
                    <p className="info-p">Binge Flix provides complete and updated data for over 9 million titles (movies, series and episodes) and 11 million actors / crew and cast members.</p>
                </div>
                <img className="nine-million-plus-img" src={nineMillionPlus} alt="Famous Streaming Services" />
            </div>
        </div>
    )
}

export default InfoSection;
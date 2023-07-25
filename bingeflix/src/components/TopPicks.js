import "./TopPicks.css"
import {useState} from "react"
const TopPicks = () => {
    const [hidden, setHidden] = useState("none");
    
    return(
        <div className="top-picks">
            <div className="tp-title-div">
                <h1 className="tp-title">Top Picks: </h1>
                <button onClick={() => {setHidden("flex")}} className="tp-more">Show more</button>
            </div>
            <div className="tp-div">
            <div className="tp-row-1">
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: hidden}} className="tp-row-2">
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-movie">
                        <img className="tp-movie-poster" />
                        <div className="tp-movie-bottom">
                            <p className="tp-movie-title"></p>
                            <div className="tp-info-div">
                                <div className="tp-info">
                                    <p className="tp-year"></p>
                                    <div className="tp-circle"></div>
                                    <p className="tp-type"></p>
                                </div>
                                <div className="tp-rating-div">
                                    <img className="tp-star"/>
                                    <p className="tp-rating"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TopPicks;
import "./RandomMovie.css"
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import star from "../images/star.png"
import axios from "axios";



const RandomMovie = ({list}) => {
    const [pageLoad, setPageLoad] = useState(true);
    const [data, setData] = useState({})
    const [id, setId] = useState("tt4154756")
    const [poster, setPoster] = useState("https://core.trac.wordpress.org/raw-attachment/ticket/45927/placeholder-image-portrait.png")
    const [title, setTitle] = useState("") 
    const [year, setYear] = useState("")
    const [type, setType] = useState("")
    const [actors, setActors] = useState("")
    const [imdbRating, setImdbRating] = useState("NA")

    // Normal options to pull data
    const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/random",
        params: {
            limit: 1,
            list: list,
        },
        headers: {
            'X-RapidAPI-Key': 'b8cb81fba4msh75ecc988d2553fbp18dfbbjsna162ec706f06',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }
    
    // This sets the info in the movie page
    let generateRandom = () => {
        axios.request(options).then((response) => {
            setData(response.data.results[0]);
            setId(response.data.results[0].id + "/ratings");
            setPoster(response.data.results[0].primaryImage.url);
            setTitle(response.data.results[0].titleText.text);
            setYear(response.data.results[0].releaseYear.year);
            setType(response.data.results[0].titleType.text);
            setActors(response.data.results[0].primaryImage.caption.plainText);

        })
    };
    // These are the options for pulling the IMDb Rating
    const ratingOptions = {
        method: 'GET',
        url: "https://moviesdatabase.p.rapidapi.com/titles/" + id,
        headers: {
          'X-RapidAPI-Key': 'b8cb81fba4msh75ecc988d2553fbp18dfbbjsna162ec706f06',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }

    // Using the options above it takes the id from random and pulls the rating from the API
    let generateRating = () => {
        axios.request(ratingOptions).then((response) => {
            if (response.data.results == undefined) {
                setImdbRating("NA")
            } else {
                setImdbRating(response.data.results.averageRating);
            }

        })
    }

    // This will run both generate functions generate random runs first so it can pass the id to generate rating
    if (pageLoad) {
        generateRandom();
        generateRating();
        setPageLoad(false);
    }
    
    return(
        <div className="RandomMovie">
            <Navbar />
            <div className="rm-div">
                <div className="rm">
                    <div className="rm-poster-div">
                        <img className="rm-poster" alt="Movie Poster" src={poster} />
                    </div>
                    <div className="rm-info-div">
                        <div className="rm-top">
                            <div className="rm-title-div">
                                <h1 className="rm-title">{title}</h1>
                                <div className="rm-type-div">
                                    <p className="rm-year">{year}</p>
                                    <div className="rm-dot"></div>
                                    <p className="rm-type">{type}</p>
                                </div>
                            </div>
                            <div className="rm-imdb-div">
                                <p className="rm-imdb-title">IMDb RATING</p>
                                <div className="rm-rating-div">
                                    <img className="rm-star" alt="star" src={star}/>
                                    <h2 className="rm-rating">{imdbRating}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="rm-actors-div">
                            <p className="rm-actors">{actors}</p>
                        </div>
                        <div className="rm-buttons">
                            <button onClick={() => setPageLoad(true)} className="rm-random">Random</button>
                            <button className="rm-mylist">Add to "My List"</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomMovie;
import "./RandomSelection.css"
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/random",
    params: {
        limit: 1,
        list: "most_pop_movies",
    },
    headers: {
        'X-RapidAPI-Key': 'b8cb81fba4msh75ecc988d2553fbp18dfbbjsna162ec706f06',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
}

const RandomSelection = () => {
    let generateRandom = () => {
        axios.request(options).then((response) => {
            alert(response.data.results[0].titleText.text);
        })
    };
    return(
        <div className="RandomSelection">
            <Navbar />
            <div className="rs">
                <div className="rs-div">
                    <h1 className="rs-title">Generate Random</h1>
                    <div className="rs-buttons">
                        <Link to={"/random/movie"} className="movie-button">Movie</Link>
                        <Link to={"/random/series"} className="series-button">Series</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomSelection;
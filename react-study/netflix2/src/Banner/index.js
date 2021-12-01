import React, {useState, useEffect} from 'react'
import "./index.css"
import axios from "axios";
function Banner() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let result = await axios.get(
                'https://api.themoviedb.org/3/movie/550?api_key=9ad199296490af335b60d2b01389b049'
            )
            setMovies(result)
        }
        fetchData();
        console.log(movies);
    }, [])
    const bannerStyle = {
        backgroundSize: "cover",
        backgroundImage: `url('http://image.tmdb.org/t/p/original/${movies.data.backdrop_path}')`,
        backgroundPosition: "center center"
    }

    return (
        <> < div className = "Banner-contents" style = {bannerStyle}> 
        <h1 className="banner-title">
        {movies.data.original_title}</h1>

        <button className="banner-button">play</button>
        <div className="Banner-player"></div>
        
        <button className="banner-button">my list</button>
        <div className="banner-desc">{movies.data.overview}</div>

    </div>
</>
    )
}

export default Banner;
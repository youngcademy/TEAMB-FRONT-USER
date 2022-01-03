import React, {useState, useEffect} from 'react' 
import "./index.css"
import axios from "../axios";
import urls from "../Movieurl"

function Banner() {


    const cutText = (string,n)=>{
        return string?.length>n ? string.substr(0,n)+"...":string}
    

    const [movie, setMovie] = useState([]);

   useEffect(() => {
    async function fetchData() {
        // let result = await axios.get(urls.fetchNetflixOriginals)
        
        let result = await axios.get(urls.fetchNetflixOriginals)
        
       
        setMovie(result.data.results[
            Math.floor(Math.random()*20)
        ])
  
    }
    fetchData();

}, []) //여기에 useEffect의 첫번째 인자에 사용되는 state나 prop을 넣어줘야
     const bannerStyle  = {
         backgroundSize: "100%",
         backgroundImage : `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
         backgroundPosition: "cente center"
        
     }

    return (
        <> < div className = "Banner-contents" style = {bannerStyle}>   
        <h1 className="banner-title">
        {movie?.name}</h1>

        <button className="banner-button">play</button>
        
        <div className="banner-desc">{cutText(movie?.overview)}</div>
        <button className="banner-button">my list</button>


    </div>
</>
    )
}

export default Banner;
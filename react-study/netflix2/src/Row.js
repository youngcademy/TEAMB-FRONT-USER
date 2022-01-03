import axios from './axios';
import React,{useState,useEffect} from 'react'
import "./Row.css";


function Row({title,fetchUrl,isLarge=false}) {
    
    const [movies,setMovies] =useState([]);
    const image_base_url="https://image.tmdb.org/t/p/original";
    //${movie.backdrop_path}
    
    useEffect(()=> {
        async function fetchData() {
            const res=await axios.get(fetchUrl); 
            setMovies(res.data.results);

        }
        fetchData();
        console.log(movies);
    },[])
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
            {movies.map(item=> ( 
                <img src={`${image_base_url}${item.poster_path}`}
                className={`row-poster ${isLarge&&'row-poster-large'}`}/>
            ))}

    
        
            </div>
        </div>
    )
}

export default Row

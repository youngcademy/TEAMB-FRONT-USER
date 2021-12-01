import React, {useState, useEffect} from 'react'
import "./index.css";
import axios from "axios";


function Banner() {

const [movie, setMovie] = useState([]);
useEffect(() => {

    async function fetchData() {
        let result = await axios.get(
            'https://api.themoviedb.org/3/discover/tv?api_key=9ad199296490af335b60d2b01389b049'
        )

        setMovie(result.data.results[0])
        
    }
    fetchData();
}, [])
 

// axios.get('https://api.themoviedb.org/3/movie/550?api_key=9ad199296490af335b60d2b01389b049')
// .then(function(result){
//     console.log(result);
   
// })


    const bannerStyle = {
        backgroundSize : "cover",
        backgroundImage : `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPositon: "center center"
    } 
    // 이게뭐냐면 css에서 써야 맞는 css스타일 을 오브젝트화 시켜서 아래에다가 넘긴건대
    // 굳이 쓴 이유가 뭐냐면 css에다가 임시주소가 동봉되어 오는 api의 json 형식 특성상 즉각즉각 참조해서 넣어야되는대
    //css파일에는 그렇게 넣을수가 없어서 js 에서 스타일 형식을 기입해줌
    return (
        <div className="Banner" style={bannerStyle}>
            <div className="banner-contents">

                <h1 className="banner-title">
                    영화제목
                </h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My list</button>
                </div>

                <h1 className="banner-desc">
                    영화설명
                </h1>
           </div>

           <div className="banner-fadeBottom"></div>
        </div>
    )
}

export default Banner

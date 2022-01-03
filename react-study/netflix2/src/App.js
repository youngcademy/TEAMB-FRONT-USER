import './App.css';
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import urls from "./Movieurl";
import axios from "./axios";
function App() {
  return (
    
    <div className="app">
    <Nav/>
    <Banner/>
    <Row title="Trending Now" fetchUrl={urls.fetchTrending} isLarge={true}/>  
    <Row title="Top Rated" fetchUrl={urls.fetchTopRated} /> 
    <Row title="Action Movies" fetchUrl={urls.fetchActionMovies} />   
    <Row title="Horror Movies" fetchUrl={urls.fetchHorrorMovies} /> 
    <Row title="Romance Movies" fetchUrl={urls.fetchRomanceMovies} /> 
    <Row title="Documentaries" fetchUrl={urls.fetchDocumentaries} /> 
    
    </div>
   
  );
}

export default App;

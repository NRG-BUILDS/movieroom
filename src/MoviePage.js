import { useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(false)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
        .then(res => res.json())
        .then(data => {
            setMovie(data);
            setError(false);
        })
        .catch(err => {
            if (err.message === 'Failed to fetch') {
                err.message = 'Unable to connect'
            }
            setError(err.message)
        });
    const getDuration = (time) => {
        let h = Math.floor(time / 60);
        let m = time % 60
        let text = `${h}hr ${m}min`
        return text
    }    

    return ( 
        <div className="moviePage">
            {movie && <div className="hero">
                <img src={'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path} alt="" />
                <div className="heroInfo">
                    <div>
                        <h1 className="heroTitle">
                            {movie.original_title}
                        </h1>
                        <p className="overview">{movie.overview}</p>
                        <span>Duration: {getDuration(movie.runtime)}</span>   <span className="rating"><i className="material-icons-outlined">star</i>{movie.vote_average}</span>

                        <div className="heroBtnContainer">
                            <button className="watchBtn">Watch Trailer</button>
                        </div>
                     </div>      
                </div>
            </div>
            }
            {error && <div className="errorContainer">
                    <h1>{ error }</h1>
                    <p>Please try checking your network and try again</p>
                </div>}
        </div>
    );
}
 
export default MoviePage;
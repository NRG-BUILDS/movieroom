import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)
    const [credits, setCredits] = useState(null)
    const [video, setVideo] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
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
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
                .then(res => res.json())
                .then(data => {
                        setCredits(data);
                        
                })
                .catch(err => console.error(err));
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)    
                .then(res => res.json())
                .then(data => { 
                    setVideo(data);
                    console.log(data)
                    // data.results[1].key;
                })        
    }, [])
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
                            <a href="#trailer"><button className="watchBtn">Watch Trailer</button></a>
                        </div>
                     </div>      
                </div>
            </div>
            }
            {movie && <div>
                <div style={{textAlign: "center"}}>
                    {movie.genres.map((genre) => (
                        <span key={genre.id}>{genre.name} || </span>
                    ))}
                </div>
            </div>}
            {credits && <div className="movieDetailsContainer">
                <div className="castTrayContainer">
                    <h2>Cast</h2>
                    <div className="actorTray">
                        {credits.cast.map((person) =>
                            {
                                return (
                                    <div key={person.id}>
                                        <img src={"https://image.tmdb.org/t/p/w185" + person.profile_path} alt="" className="actor_pic" />
                                            <span>{person.name}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            }
            {video && <div id="trailer" className="trailerContainer">
                <h2>Videos</h2>
                <div className="videoGrid">
                    {video.results.map((video) => (
                        <div className="videoItemContainer" key={video.id}>
                            <h3>{video.name}</h3>
                            <iframe src={`https://www.youtube.com/embed/${video.key}`}
                                title="youtube_container" >
                                
                            </iframe>
                        </div>
                        
                    ))}
                </div>
            </div> }
            {error && <div className="errorContainer">
                    <h1>{ error }</h1>
                    <p>Please try checking your network and try again</p>
                </div>}
        </div>
    );
}
 
export default MoviePage;
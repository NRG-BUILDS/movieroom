import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BigMovieList = ( {title, lists, size} ) => {
    console.log(lists)
    return ( 
        <div className="bigMovieList">
            <h2 className="header">{ title }</h2>
            <div className="tileSlide">
                {lists.map((movie) => (
                    <div className={size} key={movie.id}>
                        <img src={'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path} alt="" />
                        <div className="tileInfo">
                            <span className="tileTitle">{movie.title}</span>
                            <div>
                                {movie.release_date && <span className="tileYear">{movie.release_date.slice(0, 4)}</span>}
                                {movie.vote_average && <span className="tileRating"><span className="material-icons-outlined">star</span>{movie.vote_average}</span>}
                            </div>
                            
                            <Link to={'/movie/' + movie.id} className="previewBtn">Watch</Link>
                        </div>
                    </div>
                ))}
            </div>    
        </div>
     );
}

export default BigMovieList;
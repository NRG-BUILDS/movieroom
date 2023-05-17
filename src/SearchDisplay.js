import useFetch from "./useFetch";
import BigMovieList from "./BigMovieList";

const SearchDisplay = ({ q }) => {
    const { data: movieList, isPending, error } = useFetch(`https://api.themoviedb.org/3/search/multi?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd&language=en-US&query=${q}&page=1&include_adult=false`);

    return ( 
        <section className="searchDisplay">
            {isPending && <div className="bigMovieList">Loading...</div>}
            {movieList && <BigMovieList title={'Results For ' + q} lists={movieList} size="smallMovieTile"/>}
            {error && <div className="errorContainer">
                    <h1>{ error }</h1>
                    <p>Please try checking your network and try again</p>
                </div>}
        </section>
     );
}
 
export default SearchDisplay;
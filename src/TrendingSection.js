import BigMovieList from "./BigMovieList";
import useFetch from "./useFetch";

const TrendingSection = () => {
    const { data: movieList, isPending, error } = useFetch('https://api.themoviedb.org/3/trending/movie/day?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd');
    
    return ( 
        <section className="trendingSection">
            {isPending && <div className="bigMovieList">Loading...</div>}
            {movieList && <BigMovieList title='Trending Now' lists={movieList} size="bigMovieTile"/>}
            {error && <div className="errorContainer">
                    <h1>{ error }</h1>
                    <p>Please try checking your network and try again</p>
                </div>}
        </section>
     );
}
 
export default TrendingSection;
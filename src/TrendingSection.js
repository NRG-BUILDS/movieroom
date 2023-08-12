import BigMovieList from "./BigMovieList";
import LoadState from "./LoadState";
import useFetch from "./useFetch";

const TrendingSection = () => {
    const { data: movieList, isPending, error } = useFetch('https://api.themoviedb.org/3/trending/movie/day?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd');
    
    return ( 
        <section className="trendingSection">
            {isPending && <LoadState mesaage={'Trending'} size={'bigMovieTitle'} isLoading={true}/>}
            {error && <LoadState mesaage={error} size={'bigMovieTitle'} isLoading={false}/>}
            {movieList && <BigMovieList title='Trending Now' lists={movieList} size="bigMovieTile"/>}
        </section>
     );
}
 
export default TrendingSection;
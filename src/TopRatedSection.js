import BigMovieList from "./BigMovieList";
import useFetch from "./useFetch";
import LoadState from "./LoadState";

const TopRatedSection = () => {
    const { data: movieList, isPending, error } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd');
    return ( 
        <section className="topRatedSection">
            {isPending && <LoadState mesaage={'Top Rated'} size={'smallMovieTitle'} isLoading={true}/>}
            {error && <LoadState mesaage={error} size={'smallMovieTitle'} isLoading={false}/>}
            {movieList && <BigMovieList title='Top Rated' lists={movieList} size="smallMovieTile"/>}
        </section>
     );
}
 
export default TopRatedSection;
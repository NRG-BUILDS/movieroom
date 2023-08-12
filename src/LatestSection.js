import BigMovieList from "./BigMovieList";
import useFetch from "./useFetch";
import LoadState from "./LoadState";

const LatestSection = () => {
    const { data: movieList, isPending, error } = useFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd&language=en-US');
    

    return ( 
        <section className="latestSection">
            {isPending && <LoadState mesaage={'Upcoming'} size={'smallMovieTitle'} isLoading={true}/>}
            {error && <LoadState mesaage={error} size={'smallMovieTitle'} isLoading={false}/>}
            {movieList && <BigMovieList title='Upcoming Movies' lists={movieList} size="smallMovieTile"/>}
        </section>
     );
}
 
export default LatestSection;
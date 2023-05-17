import BigMovieList from "./BigMovieList";
import useFetch from "./useFetch";

const LatestSection = () => {
    const { data: movieList, isPending, error } = useFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd&language=en-US');
    
    console.log(movieList)

    return ( 
        <section className="latestSection">
            {isPending && <div className="bigMovieList">Loading...</div>}
            {movieList && <BigMovieList title='Upcoming Movies' lists={movieList} size="smallMovieTile"/>}
            {error && <div className="errorContainer">
                    <h1>{ error }</h1>
                    <p>Please try checking your network and try again</p>
                </div>}
        </section>
     );
}
 
export default LatestSection;
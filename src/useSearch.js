import useFetch from "./useFetch";


const useSearch = (query) => {
    const {data, isPending} = useFetch(`https://api.themoviedb.org/3/search/multi?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd&language=en-US&query=${query}&page=1&include_adult=false`)
    console.log(data)
    return {data, isPending};
}
 
export default useSearch;
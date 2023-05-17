import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) { 
                throw Error('Soomething really bad happened');
                setIsPending(false);
            }
            return res.json();
        })
        .then(data => {
            setData(data.results);
            setIsPending(false);
            setError(false);
        })
        .catch(err => {
            if(err.message === 'Failed to fetch') {
                err.message = 'Unable to connect'
            }
            console.log(err.message)
            setError(err.message);
            setIsPending(false)

        })
    }, [url])
    return { data, isPending, error }
}
 
export default useFetch;
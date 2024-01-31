import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.results);
        }
        fetchMovies();
    }, [url]);

    return { data }
}

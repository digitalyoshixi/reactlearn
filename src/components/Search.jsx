import {useState, useEffect} from 'react';


function Search(){

    const [query, setQuery] = useState("");
    useEffect( () => {console.log("logging",query)} , [query])
    return (
        <div>
            <input onChange={(e) => setQuery(e.target.value)}value={query} type="text"></input>
        </div>
    )
}
export default Search;
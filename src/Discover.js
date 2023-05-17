import SearchDisplay from "./SearchDisplay";
import { useState } from "react";


const Discover = () => {
    const [q, setQ] = useState('');
    const [ready, setReady] = useState(false);
    
    return ( 
        <section className="discover">
            <h1>Discover More of What You Love❤🐱‍👤</h1>
            <div className="searchbarContainer">
                <input type="text" 
                    id='searchbar' 
                    placeholder="Search For Movies & Shows..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}/>
                <button onClick={() => {setReady(true)} } className="searchBtn">
                    <span className="material-icons-outlined">search</span>
                </button>
            </div>
            {ready && <SearchDisplay q={q}/>}
        </section>
     );
}
 
export default Discover;
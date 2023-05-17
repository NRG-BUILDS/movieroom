import { useState } from 'react';
import SearchDisplay from './SearchDisplay';
import downloadPic from './images/download.jpg'


const UserMenu = () => {
    const [query, setQuery] = useState('');
    const [shouldSearch, setShouldSearch] = useState(false);


    
    return ( 
        <aside className="userMenu">
            <div className="menuContent">
                <div className="section">
                    <div className="searchbarContainer">
                        <input type="text" 
                            className='searchbar' 
                            placeholder='Search movies'
                            value={query}
                            onChange={(e) => {setQuery(e.target.value)}}/>
                        <button 
                            className="searchBtn"
                            onClick={ () => {setShouldSearch(true)} }
                            >
                                <span className="material-icons-outlined">search</span>
                            </button>
                    </div>
                    {shouldSearch && <SearchDisplay q={query}/>}
                    
                </div>
                <div className="section">
                    <h5>GENRE</h5>
                    <div className="genreGrid">
                        <div><span>Action</span></div>
                        <div><span>Comedy</span></div>
                        <div><span>Horror</span></div>
                        <div><span>Crime & Mystery</span></div>
                        <div><span>Science fiction</span></div>
                        <div><span>Historical</span></div>
                        <div><span>Adventure</span></div>
                        <div><span>Drama</span></div>
                        <div><span>Documentary</span></div>
                        <div><span>Romance</span></div>
                    </div>
                </div>
                <div className="section">
                    <h5>DOWNLOADS</h5>
                    <img src={downloadPic} alt="" />
                </div>
            </div>
        </aside>
     );
}
 
export default UserMenu;
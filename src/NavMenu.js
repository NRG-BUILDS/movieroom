import { Link } from 'react-router-dom';

const NavMenu = () => {
    const closeMenu = () => {
        if (window.innerWidth <= 600) {
            document.querySelector('.navMenu').style.width = '0';
            document.querySelector('.navMenu').style.padding = '0';
        }
    }

    return ( 
        <aside className="navMenu">
            <button className='closeNavMenu' onClick={ closeMenu }>
                <span className="material-icons-outlined">close</span>
            </button>
            <div className="navbarSection">
                <h5>MENU</h5>
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">home</span>Home</Link>
                <Link onClick={closeMenu} to='/discover'><span className="material-icons-outlined">explore</span>Discovery</Link>
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">group</span>Community</Link>
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">alarm</span>Coming Soon</Link>
            </div><hr/>
            <div className="navbarSection">
                <h5>LIBRARY</h5>
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">schedule</span>Recent</Link>
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">bookmark</span>Bookmarked</Link>
                <Link onClick={closeMenu} to='/top-rated'><span className="material-icons-outlined">home</span>Top rated</Link>
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">star</span>Downlaoded</Link>
            </div><hr/>
            <div className="navbarSection">
                <Link onClick={closeMenu} to='/settings'><span className="material-icons-outlined">settings</span>Settings</Link>
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">home</span>Help</Link>
            </div>
            <div className="logoutContainer">
                <Link onClick={closeMenu} to='/'><span className="material-icons-outlined">home</span>Logout</Link>
            </div>
        </aside>
     );
}
 
export default NavMenu;
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import profilePic from './images/profile.jpg'
import logo from './logo.svg'

const Navbar = () => {
    const username = 'Emmanuel Omolaju';
    const email = 'emmanuelomolaju@gmail.com'
    const handleClick = () => {
            const menu = document.querySelector('.userMenu');
            if (menu.style.display === '' || menu.style.display === undefined || menu.style.display === "none") {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        }
    return ( 
        <nav className="navbar">
            <Link to='/'>
                <div className="logo">
                    <img src={ logo } alt="" />
                </div>
            </Link>
            
            <div className="userMenuBtn" onClick={handleClick}>
                <div className='profileImgContainer'>
                    <img src={ profilePic } alt="" />
                </div>
                <div className="usernameContainer">
                    <p>{ username }</p>
                    <span>{ email }</span>
                </div>
                <div>
                    <button>
                        <span className="material-icons-outlined">expand_more</span>
                    </button>
                </div>
            </div>

            <div>
                <button className='navMenuBtn' onClick={() => {
                    console.log('You are doing well');
                    document.querySelector('.navMenu').style.width = '100%'
                    document.querySelector('.navMenu').style.padding = '1rem 1.5rem'
                }}>
                    <span className="material-icons-outlined">menu</span>
                </button>
            </div>
        </nav>
     );
}
 
export default Navbar;
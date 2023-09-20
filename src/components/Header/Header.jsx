import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            
            <nav>
                <span>My Website</span>
                <Link to='/'>Home</Link>
                <NavLink to='/users'>Users</NavLink>
                {/* <Link to='/users'>Users</Link> */}
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                
            </nav>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;
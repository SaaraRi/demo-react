import './Header.css';
import { NavLink, Link } from 'react-router';

const Header = ({name}) => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                 <h2>{name}</h2>
                </Link>
            </div>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/books">Books</NavLink>
                    <NavLink to="/add">Add Book</NavLink>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
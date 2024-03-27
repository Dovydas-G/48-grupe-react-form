import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/basketball'>Basketball</Link>
                <Link to='/vegetables'>Vegetables</Link>
                <Link to='/students'>Students</Link>
            </nav>
        </header>
    );
}
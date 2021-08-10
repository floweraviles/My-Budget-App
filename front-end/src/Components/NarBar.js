import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
            <NavLink to="/" className="nav-item nav-link">🏦</NavLink>
            <NavLink to="/transactions" className="nav-item nav-link ">Transactions</NavLink>
            <NavLink to="/transactions/new" className="nav-item nav-link ">New Transaction</NavLink>
        </nav>
    );
};

export default NavBar;
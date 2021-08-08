import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    return (
        <nav className="navbar">
            <NavLink to="/transactions">Transactions</NavLink>
            <NavLink to="/transactions/new">New Transaction</NavLink>
        </nav>
    );
};

export default NavBar;
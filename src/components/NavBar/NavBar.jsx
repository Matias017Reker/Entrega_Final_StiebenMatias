import CartWidget from "./CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
return(

    <nav className="navbar">
    <div className="brand">
            <Link to="/"><img src={logo} width={80}/></Link>
        </div>
    <ul className="ul_links">
        <Link className="li_links" to="/category/Pistolas">Pistolas</Link>
        <Link className="li_links" to="/category/Rifles">Rifles</Link>
        <Link className="li_links" to="/category/AR">AR</Link>
        <Link className="li_links" to="/category/SMG">SMG</Link>
        <Link className="li_links" to="/category/Escopetas">Escopetas</Link>
        <Link className="li_links" to="/category/Indumentaria">Indumentaria</Link>
        <Link className="li_links" to="/category/Municion">Municion</Link>
    </ul>
    <CartWidget/>
</nav>
)
}
export default NavBar
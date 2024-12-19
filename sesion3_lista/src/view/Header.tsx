import { NavLink } from "react-router-dom"
import '../Styles/Header.css'


const Header = (): React.JSX.Element =>
    <nav>
        <NavLink to="/">Inicio</NavLink> | <NavLink to="/about">Acerca de...</NavLink>
    </nav>

export default Header

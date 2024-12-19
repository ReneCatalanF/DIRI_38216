import { Link } from "react-router-dom"


const Header = (): React.JSX.Element =>
    <nav>
    <Link to="/">Inicio</Link> | <Link to="/about">Acerca de...</Link>
    </nav>

export default Header
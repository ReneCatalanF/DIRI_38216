import { Link, Outlet } from "react-router-dom";
import Header from "./Header"

export function FACT() {
    return(
        <>
            <h2>Preguntas frecuentes</h2>
            <br/>
            <div>
                <h4>QUIEN DESARROLLÓ ÉSTA PÁGINA?</h4>
                <p>Yo</p>
                <br/>
                <h4>Cando se desarrollo?</h4>
                <p>Hoy</p>
                <br/>
                <h4>CUANDO ESTARÁ TERMINADA?</h4>
                <p>Nunca</p>
                <br/>
            </div>
        </>
        
    );
}
export function Referencias() {
    return <h2>Referencias</h2>;
}

const About = (): React.JSX.Element =>
    <div>
        <Header/>
        <h1>Ayuda</h1>
        <nav>
            <Link to="/help/fact">FACT</Link> |
            <Link to="/help/referencias">Referencias</Link>
        </nav>
        <Outlet/>
    </div>

export default About
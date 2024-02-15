import CarWidget from "./CarWidget/CartWidget"
import "./Components.css";
const NavBar =() => {
    return (
        <nav>
            <h3 className="Nav">Ecomerce</h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Calzados</button>
                <button>Buzos</button>
            </div>
            <CarWidget />
        </nav>
    )
}
export default NavBar
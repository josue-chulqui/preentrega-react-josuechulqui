import CarWidget from "./CarWidget/CartWidget"
const NavBar =() => {
    return (
        <nav>
            <h3>Ecomerce</h3>
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
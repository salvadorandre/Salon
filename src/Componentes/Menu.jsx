import "../Estilos pagina/Menu.css"; 

function Menu() { 
    return(
        <div className="Menu-principal">
            <div className="titulo-logo">
                <img src="https://static.vecteezy.com/system/resources/previews/006/897/835/non_2x/logo-letter-d-colorful-design-vector.jpg" alt="" />
                <h1>Glamour</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sombras</a></li>
                    <li><a href="#">Labial</a></li>
                    <li><a href="#">Rubor</a></li>
                    <li><a href="#">Base</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu; 
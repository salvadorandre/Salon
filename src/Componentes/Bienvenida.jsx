import "../Estilos pagina/Bienvenida.css"; 

function Bienvenida() { 

    return(
        <div className="Bienvenida">
            <div className="Presentacion">
                <h1>Bienvenida</h1>
                <p>A una nueva experiencia de belleza y bienestar</p>
                <button>Inicia Sesion</button>
            </div>
            <div className="Imagen">
                <img src="https://i.pinimg.com/originals/79/93/bf/7993bf07dfab5df49149d0231f1982ba.jpg" alt="" />
            </div>
        </div>
    )
}

export default Bienvenida; 
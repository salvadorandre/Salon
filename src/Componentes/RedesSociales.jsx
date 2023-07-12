import "../Estilos pagina/RedesSociales.css"; 
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg"; 
function RedesSociales() { 
    return(
        <div className="Redes">
            <div className="Titulo">
                <h1>Nuestras Redes: </h1>
            </div>
            <div className="redes">
                <CgFacebook className="icono"></CgFacebook>
                <CgInstagram className="icono"></CgInstagram>
                <CgTwitter className="icono"></CgTwitter>
            </div>
        </div>
    )
}

export default RedesSociales; 
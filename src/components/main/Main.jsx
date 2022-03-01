import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons"

const Main = () => {
    return (
        <div className="row">
         
            <div className=" pt-5">
                <div className="row ">
                    <div className="col-lg-3">
                        <img src="https://avatars.githubusercontent.com/u/70980484?v=4" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-lg-9">
                        <div className="card-body">
                            <h5 className="card-title">Hola Mi Nombre es Darwing Rodilso Hernandez Castellanos</h5>
                            <p className="card-text">Soy pasante de la carrera de Ingeniería en Computación, me gusta mucho la programación, aún soy muy nuevo en el área pero</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;

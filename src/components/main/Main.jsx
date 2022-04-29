import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import BannerPrincipal from "../informacion/BannerPrincipal";

const Main = () => {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();
  const [name, setName] = useState();
  const [publico, setPublico] = useState();
  const [bio, setBio] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/darwing99")
      .then((res) => res.json())
      .then(
        (result) => {
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
          setName(result.name);
          setPublico(result.public_repos);
          setBio(result.bio);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <>
      <div className="row">
        <div className=" ">
          {" "}
          <BannerPrincipal />
          <div className="row pt-5 ">
            <div className="col-lg-3">
              <img
                src={avatarURL}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-lg-9 ">
              <div className="card-body">
                
                <div className="alert" role="alert">
                <h4 className="alert-heading">Sobre mí</h4>
                <p>{bio}</p>
                <br />
                <p className="mb-0">
                  Estudié mi secundaria en el Instituto Gubernamental Departamental La Independencia en la ciudad de Santa Bárbara, donde mis 
                  intereses se centraron en el aprendizaje de matemáticas y fisica aplicada.
                </p> 
               
                <p className="card-text">
                  
                  Actualmente soy pasante de la carrera de Ingeniería en Computación en la Universidad Tecnológica de Honduras, me
                  mis intereres se han centrado actualmente en el aprendizaje de programación, redes, aún soy muy nuevo en el área pero
                  pero me dedico a obtener conocimientos.
                </p>
                <br />
                <p>
                “Lo importante es no dejar de cuestionar. La curiosidad tiene su propia razón de ser. Uno no puede dejar de asombrarse cuando contempla los misterios de la eternidad, de la vida, de la maravillosa estructura de la realidad.
                Basta con que uno intente comprender solo un poco de este misterio cada día”. ~Albert Einstein~
                </p>
              
                <div className="pt-5">
                  <a href="https://drive.google.com/file/d/1-yLiR5lYvNGXiHGkduUzJfa68yYZOsju/view?usp=sharing" className="btn btn-primary"  >
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>{" "}
                    Descargar CV
                  </a>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

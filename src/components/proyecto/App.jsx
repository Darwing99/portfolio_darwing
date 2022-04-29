import React, { useEffect, useState } from "react";

function AppGithub() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();
  const [name, setName] = useState();
  const [publico, setPublico] = useState();
  const [bio, setBio] = useState();

  async function repoDataURL() {
    
    //Get repo data about github user
    await fetch("https://api.github.com/users/darwing99/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          const list = result.map((item) => (
            <div>
              <div className=" col">
                <div className="p-1 shadow-sm b-2 mb-2 bg-body rounded pt-2">
                  <div className="" style={{ width: "18rem;" }}>
                    <img
                      src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title"> {item.name}</h5>
                      <span class="badge bg-success">
                        Lenguaje: {item.language}
                      </span>
                      <p className="card-text">
                     Creado: {item.created_at}
                      </p>
                      <p className="card-text">
                     Actualizado: {item.updated_at}
                      </p>

                      <a href={item.svn_url} className="btn btn-primary">
                        Ver repositorio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

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
      );repoDataURL();
  }, []);
  return (
    <div>
      <div className=" d-flex flex-column pt-2 row">
        <div className=" col-lg-12">
          <div className="p-2  b-5 row mb-5 bg-body rounded pt-3">
            <div className="col-lg-2 shadow-sm" style={{ width: "18rem;" }}>
              <img src={avatarURL} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <div class="alert alert-primary" role="alert">
                  {githubUsername}
                </div>
                <p className="card-text">{bio}</p>
                <button
                  onClick={repoDataURL}
                  type="button"
                  class="btn btn-primary position-relative"
                >
                  Repositorios
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {publico}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="row row-cols-1 row-cols-md-4 g-4">{repoData}</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-5 row"></div>
    </div>
  );
}

export default AppGithub;

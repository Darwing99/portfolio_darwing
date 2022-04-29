import React from "react";

const OpenSource = () => {
  return (
    <div className=" col-lg-4">
      <div className="p-2 shadow-sm b-5 mb-5 bg-body rounded ">
        <div className="p-3">
          <h2>Gestión de sistemas operativos GNU/Linux</h2>
        </div>
        <div className="p-3 ">
          <div className="p-2" aria-current="true">
            <div className="row ">
              <div className="col-lg-9">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="text-success mb-2">Debian OS</h5>
                </div>
                <p className="mb-1">
                  Debian uno de los sistemas Open Source mas potentes, usado por
                  multiples empresas de cloud Computing. LO he usado como
                  sistema base, virtualizado y en cloud computing para gestionar
                  servicios de apache2 y apache tomcat.
                </p>
              </div>
              <div className="col-lg-3">
                <img
                  className="card-img-top"
                  src="https://www.debian.org/Pics/debian-logo-1024x576.png"
                  alt="Debian Linux"
                />
              </div>
            </div>

            <div className="row  pt-5">
              <div className="col-lg-9">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="text-success mb-2">Arch Linux</h5>
                </div>
                <p className="mb-1">
                  Arch Linux, he usado un derivado de esta distribución como
                  sistema base, gestión de servicios LAMP y Apache.{" "}
                </p>
              </div>
              <div className="col-lg-3">
                <img
                  className="card-img-top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Archlinux-vert-dark.svg/2560px-Archlinux-vert-dark.svg.png"
                  alt="Arch Linux"
                />
              </div>
            </div>
            <div className="row  pt-5">
              <div className="col-lg-9">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="text-success mb-2">Centos OS</h5>
                </div>
                <p className="mb-1">
                  LO he usado virtualizado y en cloud computing (amazon cloud,
                  digital Ocean y Oracle Cloud) para la gestion de servicios
                  como LAMP Node-Red, httpd, Grafana Server y en la gestón de
                  script de tipo bash
                </p>
              </div>
              <div className="col-lg-3">
                <img
                  className="card-img-top"
                  src="https://www.linuxadictos.com/wp-content/uploads/CentOS-8.0.png"
                  alt="Centos Linux"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;

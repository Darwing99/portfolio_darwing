import React from "react";
import AppGithub from "./App";

const Project = () => {
  return (
    <div className=" pt-5">
      <div className="fs-1" style={{ width: "6rem;" }}>
   <h5>Proyectos en Github</h5>
      </div>

      <AppGithub />
    </div>
  );
};

export default Project;

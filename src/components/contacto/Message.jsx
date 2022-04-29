import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
const Message = () => {
  const [state, handleSubmit] = useForm("myyllqpb");

  const [estado, setEstado] = useState("");

  useEffect(() => {
    setTimeout(() => {
      state.succeeded && state.submitting
        ? setEstado("Mensaje enviado")
        : setEstado("No se pudo enviar Mensaje");
    }, 1000);
  }, []);

  return (
    <div className="col-lg-6">
      <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Success:"
        ></svg>
        <div>{estado} </div>
      </div>

      <div></div>

      <div className="p-2 ">
        <form onSubmit={handleSubmit} className="p-5">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Su correo nunca será compartido
            </div>
          </div>
          <div className="mb-3 ">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="message"
              id="message"
              style={{ height: "100px" }}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faMessage} />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;

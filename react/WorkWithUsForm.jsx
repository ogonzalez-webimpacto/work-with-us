import React from 'react';
import './css/index.css';

function FormWorkWithUs() {
  return(
    <>
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form action="">
          <div className="formbold-mb-5">
            <label for="nombre" className="formbold-form-label"> Nombre </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              className="formbold-form-input"
            />
          </div>
          <div className="formbold-mb-5">
            <label for="apellidos" className="formbold-form-label"> Apellidos </label>
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Apellidos"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label for="email" className="formbold-form-label"> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label for="poblacion" className="formbold-form-label"> Población </label>
            <input
              type="text"
              name="poblacion"
              id="poblacion"
              placeholder="Población"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label for="cp" className="formbold-form-label"> Codigo Postal </label>
            <input
              type="text"
              name="cp"
              id="cp"
              placeholder="Codigo Postal"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label for="tel1" className="formbold-form-label"> Telefono 1 </label>
            <input
              type="text"
              name="tel1"
              id="tel1"
              placeholder="Telefono 1"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label for="tel2" className="formbold-form-label"> Telefono 2 </label>
            <input
              type="text"
              name="tel2"
              id="tel2"
              placeholder="Telefono 2"
              className="formbold-form-input"
            />
          </div>
          <div>
            <button className="formbold-btn">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default FormWorkWithUs

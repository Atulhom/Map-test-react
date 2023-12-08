import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import Sort from "./sort";
import Cards from "./cards";
import Discord from "./discord";

//Los arrays de objetos van con {}
//Los arrays normales van con [] - hay que buscar mas informacion sobre esto.
// Practicar mapeos cona Array simples y Array de objetos.

// Esto seria un mapeo al Array alumnos donde nos devuelve la propiedad nombre asoaciada al Item
// alumnos.map(function (item, index, arr) {
//   return `<li>${item.nombre}</li>`;
// });

/* trabajos de practica. Replicar el array de las navbar de la siguiente web: https://www.frontendmentor.io/challenges
  que contiene las siguientes propiedades: Url(img), Title, Links(lenguajes), Parrafo. */

// Info adicional - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const Home = () => {
  return (
    <div className="text-center bg-light">
      <Header />
      <Navbar />
      <Sort />
      <p className="text-end fs-6 fw-bold mt-3 me-5">
        Learn about our challenge types ⭐
      </p>
      <Cards />
      <Discord />
    </div>
  );
};

export default Home;

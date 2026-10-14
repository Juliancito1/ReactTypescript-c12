import axios from "axios";
import { useEffect, useState } from "react";
import type { Peliculas } from "./interfaces/peliculas.interface";
import Card from "./components/Card";

function App() {
  const [peliculas, setPeliculas] = useState<Peliculas[] | null>(null);

  // const sumaNumeros = (numero1: number, numero2: number): number =>{
  //   return numero1 + numero2
  // }

  // console.log(sumaNumeros(2,4))

  

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await axios.get("https://devsapihub.com/api-movies");
        console.log(respuesta.data);
        setPeliculas(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerPeliculas();
  }, []);

  return (
    <>
      <h1>Peliculas</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {peliculas &&
          peliculas.map((pelicula) => (
            <Card key={pelicula.id} pelicula={pelicula} />
          ))}
      </section>
    </>
  );
}

export default App;

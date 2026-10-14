import type { Peliculas } from "../interfaces/peliculas.interface";

function Card({ pelicula }: {pelicula: Peliculas}) {
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-emerald-400 text-gray-900 shadow-md">
      <img className="block h-52 w-full object-cover" src={pelicula.image_url} alt={pelicula.title} />
      <div className="px-5 pt-4 pb-5">
        <h2 className="mb-2 text-xl leading-snug font-semibold">{pelicula.title}</h2>
        <p className="leading-relaxed text-gray-600">{pelicula.description}</p>
      </div>
    </article>
  );
}

export default Card;

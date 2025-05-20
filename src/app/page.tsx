import Image from "next/image";
import Link from "next/link";


const fakeData = [
  { "title": "Movie 1", "year": 2021, "id": 1, "poster": "/poster.jpg" },
  { "title": "Movie 2", "year": 2005, "id": 2, "poster": "/poster.jpg" },
  { "title": "Movie 3", "year": 1993, "id": 3, "poster": "/poster.jpg" },
  { "title": "Laser Hawk", "year": 1987, "id": 4, "poster": "/poster.jpg" },
  { "title": "Galaxy Drift", "year": 2077, "id": 5, "poster": "/poster.jpg" },
  { "title": "Muffin Protocol", "year": 2012, "id": 6, "poster": "/poster.jpg" },
  { "title": "Quantum Ferret", "year": 1999, "id": 7, "poster": "/poster.jpg" },
  { "title": "Escape from Pancake Island", "year": 1985, "id": 8, "poster": "/poster.jpg" },
  { "title": "Toaster Wars", "year": 2023, "id": 9, "poster": "/poster.jpg" },
  { "title": "Suburban Shadows", "year": 2001, "id": 10, "poster": "/poster.jpg" }
];


type MovieDataType = typeof fakeData[0];

function MovieIcon({ movieData }: { movieData: MovieDataType }) {
  return (
    <Link
      className="flex flex-col bg-slate-300 rounded-sm hover:scale-110 transition duration-150"
      href={`/movie/${movieData.id}`}
    >
      <Image
        src={movieData.poster}
        alt={"Poster for " + movieData.title}
        width={200}
        height={100}
        className="w-full"
      />
      <div className="flex flex-row p-2 justify-between">
        <p className="font-bold">{movieData.title}</p>
        <p className="text-gray-600">{movieData.year}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <div className="text-green-400 text-5xl font-bold m-5 text-center ">
        JumboBox'd
      </div>
      <div className="grid grid-cols-6 gap-10 m-16">
        {fakeData.map((movie) => (
          <MovieIcon
            movieData={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

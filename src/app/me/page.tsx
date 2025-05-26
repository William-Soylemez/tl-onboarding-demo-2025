import Link from "next/link";
import MovieIcon from "../list/[page]/MovieIcon";

type MovieDataType = {
  id: number;
  title: string;
  year: string;
  poster: string;
};

type Props = {
  params: { page: string }
};

export default async function Home({ params }: Props) {

  const { page } = await params;
  const numericPage = parseInt(page || "", 10);

  const res = await fetch(`http://localhost:3000/api/demo/getLikedMovies`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return (
    <div>
      <div className="grid grid-cols-6 gap-10 m-16">
        {data.map((movie: MovieDataType) => (
          <MovieIcon
            movieData={movie}
            key={movie.id}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center">
        {numericPage > 1 &&
          <Link
            className="bg-green-400 text-white font-bold py-2 px-4 rounded m-5 hover:bg-green-500 transition duration-150 w-24 text-center"
            href={`/list/${numericPage - 1}`}
          >
            Previous
          </Link>
        }
        {numericPage < 10 &&
          <Link
            className="bg-green-400 text-white font-bold py-2 px-4 rounded m-5 hover:bg-green-500 transition duration-150 w-24 text-center"
            href={`/list/${parseInt(page) + 1}`}
          >
            Next
          </Link>
        }
      </div>
    </div >
  );
}

import Image from "next/image";
import Link from "next/link";

type MovieDataType = {
  id: number;
  title: string;
  year: string;
  poster: string;
};

type Props = {
  params: { page: string }
};

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

export default async function Home({ params }: Props) {

  const { page } = await params;
  const numericPage = parseInt(page || "", 10);

  const res = await fetch(`http://localhost:3000/api/list?page=${page}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return (
    <div>
      <div className="text-green-400 text-5xl font-bold m-5 text-center ">
        JumboBox'd
      </div>
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

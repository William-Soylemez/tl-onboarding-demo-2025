import Image from "next/image";
import Link from "next/link";

type MovieDataType = {
    id: number;
    title: string;
    year: string;
    poster: string;
};

export default function MovieIcon({ movieData }: { movieData: MovieDataType }) {
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
import MovieIcon from "../list/[page]/MovieIcon";

import { auth } from "@clerk/nextjs/server";

type MovieDataType = {
  id: number;
  title: string;
  year: string;
  poster: string;
};

export default async function Home() {

  const res = await fetch(`http://localhost:3000/api/list?page=${1}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const { userId: user_id, getToken } = await auth();
  if (!user_id) {
    return (
      <div className="text-center m-10">
        <p className="text-2xl">Please sign in to view your liked movies.</p>
        <p className="text-lg text-gray-600">Your liked movies will appear here.</p>
      </div>
    );
  }

  const token = await getToken();
  const likedMoviesRes = await fetch(
    `http://localhost:3000/api/demo/getLikedMovies`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!likedMoviesRes.ok) {
    throw new Error("Failed to fetch liked movies");
  }
  const likedMovies = await likedMoviesRes.json();
  console.log("Liked movies:", likedMovies);

  return (
    <div>
      <div className="font-bold text-3xl text-center m-10 text-green-500">
        My liked movies
      </div>
      <div className="grid grid-cols-6 gap-10 m-16">
        {likedMovies.map((movie: MovieDataType) => (
          <MovieIcon
            movieData={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div >
  );
}

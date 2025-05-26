import Image from "next/image";
import ToggleSeen from "./ToggleSeen";
import Recommend from "./Recommend";



import { auth } from "@clerk/nextjs/server";

export default async function MoviePage({ params }: any) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  if (Number.isNaN(numericId)) {
    return <div>Invalid movie ID</div>;
  }


  const res = await fetch(`http://localhost:3000/api/movie?id=${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  // Get recommend and seen status
  let recommend = "na";
  let seen = "no";
  const { userId: user_id, getToken } = await auth();
  if (user_id) {
    const token = await getToken();
    const ratingRes = await fetch(
      `http://localhost:3000/api/demo/getMovieRating?movie_id=${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!ratingRes.ok) {
      throw new Error("Failed to fetch data");
    }
    const json = await ratingRes.json();
    recommend = json.recommend || "na";
    seen = json.seen || "no";
  }

  return (
    <div>
      <div className="flex flex-row p-5">
        <Image
          src={data.poster}
          alt={"Poster for " + data.title}
          width={200}
          height={100}
          className="w-1/3"
        />
        <div className="flex flex-col items-start px-5">
          <p className="text-3xl">{data.title}</p>
          <p className="text-lg">{data.year}</p>
          <p className="my-5 text-md">
            {data.description}
          </p>
          <div className="flex flex-row items-center justify-between w-full">

            <ToggleSeen user_id={user_id} seen={seen} movie_id={numericId} />
            <Recommend user_id={user_id} recommend={recommend} movie_id={numericId} />

          </div>
        </div>


      </div>

    </div>
  );
}


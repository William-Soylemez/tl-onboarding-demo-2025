import Image from "next/image";
import ToggleSeen from "./ToggleSeen";
import Recommend from "./Recommend";

type Props = {
  params: { id: string }
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  if (Number.isNaN(numericId)) {
    return <div>Invalid movie ID</div>;
  }


  const res = await fetch(`http://localhost:3000/api/movie?id=${id}`, {
    next: { revalidate: 60 },
  });

  // console.log(res.text());

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const user_id = 1; // Replace with actual user ID
  // Get recommend and seen status
  const ratingRes = await fetch(`http://localhost:3000/api/demo/getMovieRating?user_id=${user_id}&movie_id=${id}`);
  if (!ratingRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const { recommend, seen } = await ratingRes.json();

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
            <ToggleSeen seen={seen} user_id={user_id} movie_id={numericId} />
            <Recommend recommend={recommend} user_id={user_id} movie_id={numericId} />
          </div>
        </div>


      </div>

    </div>
  );
}


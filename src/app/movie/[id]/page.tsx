import Image from "next/image";

type Props = {
  params: { id: string }
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params;


  const res = await fetch(`http://localhost:3000/api/movie?id=${id}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log(data.poster);

  return (
    <div>
      <div className="text-green-400 text-5xl font-bold m-5 text-center ">
        JumboBox'd
      </div>
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
        </div>

      </div>

    </div>
  );
}


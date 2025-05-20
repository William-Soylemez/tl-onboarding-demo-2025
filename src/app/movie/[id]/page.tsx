import { type NextPage } from "next";

const fakeData = {
  
};

type Props = {
  params: {
    id: string;
  };
};

const MoviePage: NextPage<Props> = ({ params }) => {
  return <div>Movie ID: {params.id}</div>;
};

export default MoviePage;

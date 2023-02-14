declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

type MovieProps = {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
};

type HeaderProps = {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};

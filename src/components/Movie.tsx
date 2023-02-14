import React from "react";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const MovieOverview = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  backdrop-filter: blur(12px);
  text-shadow: 2px 2px 4px #000;
  opacity: 0;
  color: #fff;
  padding: 8px;
  overflow: auto;
  max-height: 100%;
  transition: opacity 500ms ease-out;
`;

const MovieCard = styled.div`
  width: 250px;
  position: relative;
  margin: 16px;
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: #3f3f46;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  &:hover ${MovieOverview} {
    transition-duration: 500ms;
    opacity: 100;
  }
`;

const MovieThumbnail = styled.img`
  max-width: 100%;
`;

const MovieHeader = styled.div`
  font-size: 14px;
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: white;
  & h3 {
    font-size: 14px;
    font-weight: 500;
  }
`;

const OverviewTitle = styled.h2`
  padding: 8px 0;
  font-weight: bold;
`;

const Vote = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`;

const Movie = ({ title, poster_path, overview, vote_average }: MovieProps) => {
  return (
    <MovieCard>
      <MovieOverview>
        <OverviewTitle>{title} overview:</OverviewTitle>
        <p>{overview}</p>
      </MovieOverview>
      <MovieThumbnail src={IMAGE_API + poster_path} alt={title} title={title} />
      <MovieHeader>
        <h3>{title}</h3>
        <Vote>
          <StarIcon />
          {vote_average}
        </Vote>
      </MovieHeader>
    </MovieCard>
  );
};

export default Movie;

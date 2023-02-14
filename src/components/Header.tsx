import styled from "styled-components";
import React, { useState } from "react";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=b8af790abfa74b6dbae4a5f61dbcd725&query=";

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Heading = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const SearchBar = styled.input`
  background-color: #18181b;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 1.125rem;
  margin-bottom: 16px;
  color: #fff;
`;

const Header = ({ setMovies }: HeaderProps) => {
  const [searchPath, setSearchPath] = useState("");

  const handleOnSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (searchPath) {
      (async () => {
        try {
          const response = await fetch(SEARCH_API + searchPath);
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error(error);
        }
      })();

      setSearchPath("");
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPath(event.target.value);
  };

  return (
    <AppHeader>
      <Heading href="/">
        <h1>Movies App</h1>
      </Heading>
      <form onSubmit={handleOnSubmit}>
        <SearchBar
          type="search"
          placeholder="Search a movie"
          value={searchPath}
          onChange={handleOnChange}
        />
      </form>
    </AppHeader>
  );
};
export default Header;

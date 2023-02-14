import styled from "styled-components";

const StyledFooter = styled.footer`
  font-size: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  color: white;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Author:{" "}
        <StyledLink
          href="https://programistapiotr.pl/"
          title="Go to my website"
          target="_blank"
        >
          Piotr Pająk
        </StyledLink>
      </p>
      <p>
        API used:{" "}
        <StyledLink
          href="https://www.themoviedb.org/"
          title="The Movie Database"
        >
          TMDB
        </StyledLink>
      </p>
    </StyledFooter>
  );
};
export default Footer;

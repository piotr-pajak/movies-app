import styled from "styled-components";

const Footer = () => {
  const AppFooter = styled.footer`
    font-size: 1.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    color: white;
  `;
  const Link = styled.a`
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
  `;
  return (
    <AppFooter>
      <p>
        Author: <Link href="https://programistapiotr.pl/">Piotr Pająk</Link>
      </p>
      <p>
        API used:{" "}
        <Link href="https://www.themoviedb.org/" title="The Movie Database ">
          TMDB
        </Link>
      </p>
    </AppFooter>
  );
};
export default Footer;

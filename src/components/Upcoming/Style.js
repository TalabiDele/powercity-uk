import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  div.container {
    h1 {
      margin-bottom: 2rem;
      text-align: center;
    }

    div.wrapper {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      margin: auto;

      div.card {
        img {
          width: 400px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
`;

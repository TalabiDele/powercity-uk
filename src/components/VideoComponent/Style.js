import styled from "styled-components";

export const Container = styled.div`
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%); */
  height: 30vh;

  div.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    width: 70%;
    margin: 5rem auto;
    gap: 2rem;
  }

  div.wrapper {
    width: 100%;
    color: #25284f;

    h1 {
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

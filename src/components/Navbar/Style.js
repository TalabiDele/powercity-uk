import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  /* background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); */

  div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;

    img {
      width: 80px;
      border-radius: 50%;
    }

    ul {
      display: grid;
      width: 50%;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }

    li {
      font-size: 1.2rem;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Wrapper = styled.div``;

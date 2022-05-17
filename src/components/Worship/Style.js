import styled from "styled-components";
import bg from "../img/church-bg.png";

export const Container = styled.div`
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0% 30%, 100% 0%, 100% 70%, 0% 100%);
  /* background-color: #25284f; */
  background-image: url(${bg});

  /* background-color: #fff; */
  padding-top: 8rem;

  &::before {
    content: "";

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
  }

  div.container {
    position: relative;
    padding-top: 20rem;
    width: 80%;
    margin: auto;
    text-align: center;
    color: #fff;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 40px;
      width: 60%;
      margin: auto;
    }
  }
`;

export const Wrapper = styled.div``;

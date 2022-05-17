import styled from "styled-components";
import bg from "../img/powercity-church4.jpg";

export const Container = styled.div`
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
  background-color: #25284f;
  /* background-color: #fff; */
  padding-top: 8rem;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  div.container {
    position: relative;
    width: 70%;
    margin: 0rem auto;
    padding-top: 5rem;

    img {
      width: 400px;
    }

    div.hero-header {
      width: 80%;
      text-align: right;
      margin-right: 20rem;

      p {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: -0.5rem;
      }

      h1 {
        font-size: 70px;
        line-height: 1;
        margin-bottom: 2rem;
        /* color: #313131; */
        color: #fff;
      }

      button {
        border: none;
        background: none;
        color: #ffffff;
        border-radius: 15px;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        transition: all 0.2s ease;
        cursor: pointer;
        border: 1.5px solid #fff;

        &:hover {
          background-color: #fff;
          color: #25284f;
        }
      }
    }

    div.content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-items: center;
      /* height: 70vh; */
    }
  }
`;

export const Wrapper = styled.div``;

import styled from "styled-components";
import image from "../img/powercity-church3.jpg";

export const Container = styled.div`
  div.header {
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #25284f;
    height: 20rem;
    text-align: center;
    padding-top: 10rem;
    margin-bottom: 5rem;
  }

  div.header::before {
    content: "";
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
    height: 20rem;
  }

  h1 {
    position: relative;
    font-size: 3rem;
    color: #fff;
  }

  div.span {
    height: 0.3rem;
    width: 5%;
    margin: auto;
    background-color: #f65719;
    position: relative;
  }

  div.events {
    margin-bottom: 5rem;

    div.card_container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 70%;
      margin: auto;
      justify-items: center;
    }

    h1 {
      color: #25284f;
      font-size: 2rem;
      margin: 0rem auto 2rem auto;
      width: 70%;
    }
  }

  button {
    border: none;
    background-color: #f65719;
    color: #fff;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    border: 2px solid #f65719;
    font-weight: bold;

    &:hover {
      color: #25284f;
      background: none;
      border: 2px solid #f65719;
    }
  }

  div.modal {
    position: fixed;
    height: ${({ isImage }) => (isImage ? "100%" : "0%")};
    width: ${({ isImage }) => (isImage ? "100%" : "0%")};
    opacity: ${({ isImage }) => (isImage ? "1" : "0")};
    background-color: #25284fe8;
    z-index: 3;
    display: grid;
    transition: all 0.3s ease-in-out;

    img {
      width: 70%;
      margin: auto;
    }
  }

  div.card {
    img {
      width: 90%;
      cursor: pointer;
    }

    h2 {
      color: #25284f;
    }
  }
`;

export const Wrapper = styled.div``;

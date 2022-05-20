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
      }
    }
  }
`;

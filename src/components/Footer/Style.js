import styled from "styled-components";
import bg from "../img/church-bg.png";

export const Container = styled.div`
  background-image: url(${bg});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 20rem;
  color: #fff;

  div.container {
    padding-top: 7rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin: auto;
    align-items: center;
    justify-items: center;

    div.image {
      img {
        width: 70px;
        border-radius: 50%;
      }
    }

    div.about {
      a {
        font-size: 24px;
        color: #fff;
      }
    }

    div.socials {
      font-size: 30px;
      color: #fff;

      ul {
        display: flex;
        width: 100%;

        li {
          margin-right: 2rem;

          a {
            color: #fff;
          }
        }
      }
    }
  }
`;

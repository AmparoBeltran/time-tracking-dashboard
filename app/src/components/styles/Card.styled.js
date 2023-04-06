import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: ${({ theme, title }) => theme.colors[title]};
  background-image: url("./images/${({ bgImage }) => bgImage}");

  background-repeat: no-repeat;
  background-position-x: 10em;
  background-position-y: -0.5em;
  border-radius: 20px;
  height: 250px;
  width: 250px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 140px;
    width: 100%;
    background-position-x: 13em;
  }

  .card-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 20px;
    height: 200px;
    width: 100%;
    padding: 0 1.5em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: auto;
      padding: 1em 1.5em;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.cardHover};
    }
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 1.5em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.paleBlue};
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }

  h1 {
    font-weight: 400;
    margin-bottom: 0.2em;
    color: white;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2em;
    }
  }

  .last-week {
    color: ${({ theme }) => theme.colors.paleBlue};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      & p {
        font-size: 0.8em;
      }
    }
  }
`;

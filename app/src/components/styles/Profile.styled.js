import styled from "styled-components";

export const ProfileStyled = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 20px;
  grid-area: one;

  img {
    width: 80px;
    border: 3px solid ${({ theme }) => theme.colors.paleBlue};
    border-radius: 100%;
    margin-bottom: 30px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 60px;
      border: 2px solid ${({ theme }) => theme.colors.paleBlue};
      margin: 0;
    }
  }

  h1 {
    font-weight: 100;
    color: white;
    font-size: 2.5em;
  }

  p {
    color: ${({ theme }) => theme.colors.paleBlue};
    font-size: 0.9em;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .report {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 20px;
    flex-grow: 0.6;
    padding: 1em;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: center;
    }
  }

  header {
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1em;

      & h1 {
        display: inline;
        font-size: 1.2em;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 0.4;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: row;
      padding: 0.8em;
    }
  }

  button {
    background: none;
    color: ${({ theme }) => theme.colors.paleBlue};
    border: none;

    &:hover {
      color: white;
    }

    &:focus {
      outline: none;
      color: white;
    }

    &.active {
      color: white;
    }
  }
`;

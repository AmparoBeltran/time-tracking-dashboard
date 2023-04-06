import styled from "styled-components";

export const GridStyled = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven";

  @media screen and (min-width: 1920px) {
    & {
      grid-template-areas:
        "one two three four"
        "one five six seven";
    }
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    font-family: 'Rubik', sans-serif;
    font-size: 1em;

    display: grid;
    place-content: center;
    min-height: 100vh;
background-color: ${({ theme }) => theme.colors.veryDarkBlue};

@media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 2em 0;
}

    h1, p{
        margin: 0;
    }
   
}


`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100%;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Raleway';
}

body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  
  color: ${({ theme }) => theme.primaryLight};
  overflow-x: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
section {
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 10px 0;
  font-weight: 600;
  color: #faf9f9;
  line-height: 1.1;
}

main {
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 20px;
}

.main-image {
  width: 250px;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--light-border-color);
  margin-left: 2rem;
}
`;

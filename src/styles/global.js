import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
${variables};

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


body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-color: var(--navy);
  color: var(--slate);
  font-family: 'Lora', serif;
  font-size: 16px;
  line-height:1.3;
  overflow-x: hidden;

  &.blur {
    overflow: hidden;

    #content > * {
      filter: blur(5px) brightness(0.7);
    }
  }
}

ul {
  list-style: none;
}

svg {
  fill: currentColor;
  width: 100%;
  height: 100%;
  vertical-align: middle;

  &.feather {
    fill: none;
  }
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  position: relative;

  &:hover, &:focus {
    color: var(--green);
  }

  &.inline-link {
    ${({ theme }) => theme.mixins.inlineLink}
  }
}

p {
  margin: 0 0 15px 0;

  &:last-child, 
  &:last-of-type {
    margin: 0;
  }
}

section {
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 10px 0;
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
}

#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

main {
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 150px;

  @media (max-width: 1024px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 425px) {
      padding: 125px 25px;
    }

}

.main-image {
  width: 250px;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--light-border-color);
  margin-left: 2rem;
}

.big-heading {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
  }

.sub-title {
  color: var(--green);
  margin: 0px 0px 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.numbered-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  white-space: nowrap;
  font-size: clamp(26px, 5vw, 32px);
  
  
  &:before {
    position: relative;
    bottom: -4px;
    counter-increment: section;
    content: "0" counter(section) ".";
    margin-right: 10px;
  color: var(--green);
  font-size: clamp(16px,3vw,20px);
  font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
  }

  &:after {
    content:'';
    position: relative;
    display: block;
    width: 300px;
    height: 1px;
    top: 5px;
    background-color: var(--lightest-navy);
    margin-left: 20px;

    @media(max-width: 1024px){
      width: 200px;
    }

    @media(max-width: 768px) {
      width:100%
    }
  }
}


.overline {
  color: var(--green);
  font-size: 16px;
  font-weight: 400;
}
`;

export default GlobalStyle;

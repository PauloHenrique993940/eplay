import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preta: '#111',
  cinza: '#2e2e2e',
  verde: '#10ac84'
}
const font = {
  fontPadra0:
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');"
}

export const GlobalCss = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color:${cores.branca};
    font-family: ${font.fontPadra0};
    padding-top: 40px;
    
  }
  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

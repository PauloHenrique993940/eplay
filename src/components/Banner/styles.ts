import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 600px;
  display: block;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 449px;
  font-family: 'Cinzel', serif;
  font-weight: bold;
  text-transform: uppercase;
  color: ${cores.branca}
  text-shadow: 3px 3px 6px rgb(255, 255, 255), 0px 0px 15px rgb(255, 255, 255);
  letter-spacing: 2px;
  background: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 7, 7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

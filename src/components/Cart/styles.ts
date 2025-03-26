import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Corrigido */
  display: none; /* Corrigido */
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.cinza};
  position: fixed; /* Adicionado para garantir que funcione corretamente */
  right: 0;
  top: 0;
  height: 100%;
  max-width: 360px; /* Defina uma largura */
  width: 100%;
  z-index: 1;
  padding: 30px; 10px 0 10px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weigth: bold;
  font-size: 14px;
  cores: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    cores: #686868;
  }
`
export const Quantity = styled.p`
  font-weigth: bold;
  font-size: 14px;
  cores: ${cores.branca};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.branca};
    font-weight: bold;
    font-size: 16px;
  }
  span {
    display: block;
    color: ${cores.branca};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    left: 95%;
    top: 8px;
    rigth: 0;
  }
`

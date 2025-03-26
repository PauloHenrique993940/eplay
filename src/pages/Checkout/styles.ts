import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowPrps = {
  maxWidth?: string
}

export const Row = styled.div<RowPrps>`
  display: flex;
  justify-content: space-between;
  column-gap: 24px;
  margin-top: 8px;
`

export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  flex: auto;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    width: 100%;
  }
  .btnGroup {
    display: flex;
    justify-content: space-between;
    gap: 10px; /* Ajuste o valor conforme necessário */
  }
`
export const ImageCartao = styled.img`
  width: 30px;
  heigth: 40px;
`

export const Btn = styled.button`
  width: 200px;
  background-color: ${cores.verde};
  border-radius: 8px;
  border: 1px solid ${cores.verde};
  height: 30px;
  margin: 0 5px; /* Adiciona espaçamento horizontal entre os botões */
  gap: 10px;

  span {
    padding-left: 8px;
  }
`

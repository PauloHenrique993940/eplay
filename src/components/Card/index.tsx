import { Container } from './styles'
import React from 'react'

type Props = {
  children: React.ReactNode
  title: string
}

const Card = ({ children, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Card

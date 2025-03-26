import { Imagem, Precos, Titulo } from './styles'

import { useEffect, useState } from 'react'
import bannerImag from '../../assets/godbane.gif'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'
import { data } from 'react-router-dom'

const Banner = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem
      style={{ backgroundImage: `url(${game.media?.cover || bannerImag})` }}
    >
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices?.old || 0)}</span> <br />
            por apenas {formataPreco(game.prices?.current || 0)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner

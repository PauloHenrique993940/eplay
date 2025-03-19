import { Imagem, Precos, Titulo } from './styles'

import { useEffect, useState } from 'react'
import bannerImag from '../../assets/godbane.gif'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
      .catch(() => setGame(null)) // Tratar erro caso a API falhe
  }, [])

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
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner

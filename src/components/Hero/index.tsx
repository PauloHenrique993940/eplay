import { useDispatch } from 'react-redux'
import { Game } from '../../pages/Home'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'

import { Banner, Infos } from './styles'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => {
  const dispartch = useDispatch()

  const addToCart = () => {
    dispartch(add(game))
    dispartch(open())
  }
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          De{' '}
          <span>
            {game.prices.old ? formataPreco(game.prices.old) : 'R$ 499,00'}
          </span>
          <p>
            Por{' '}
            {game.prices.current
              ? formataPreco(game.prices.current)
              : 'R$ 0,00'}
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar este jogo ao carrinho"
            variant="primary"
            onClick={addToCart}
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

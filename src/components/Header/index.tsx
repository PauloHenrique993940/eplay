import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import { HeaderBar, LinkItem, Links, CardButton } from './styles'
import carrinho from '../../assets/logo/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categorias">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="/novidades">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="/promocoes">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CardButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho de Compras" />
      </CardButton>
    </HeaderBar>
  )
}
export default Header

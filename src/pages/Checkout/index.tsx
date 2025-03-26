import Button from '../../components/Button'
import Card from '../../components/Card'
import { Btn, ImageCartao, InputGroup, Row } from './styles'
import boleto from '../../assets/boleto.png'
import cartao from '../../assets/cart.jpg'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de cobrança">
      <Row>
        <InputGroup>
          <label htmlFor="fullName">Nome completo</label>
          <input id="fullName" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="cpf">CPF</label>
          <input id="cpf" type="text" />
        </InputGroup>
      </Row>
      <h3 className="margin-top">Dados da entrega - conteúdo digital</h3>
      <Row>
        <InputGroup>
          <label htmlFor="deliveryEmail">E-mail</label>
          <input id="deliveryEmail" type="email" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="confirmDeliveryEmail">Confirme o email</label>
          <input id="confirmDeliveryEmail" type="email" />
        </InputGroup>
      </Row>
    </Card>
    <Card title="Pagamento">
      <div>
        <div className="btnGroup">
          <Btn title="Pagar com boleto">
            <ImageCartao src={boleto} alt="Boleto bancário" />
            <span>Boleto</span>
          </Btn>
          <Btn title="Pagar com cartão">
            <ImageCartao src={cartao} alt="Cartão de crédito" />
            <span>Cartão de crédito</span>
          </Btn>
        </div>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </div>
    </Card>
    <Row>
      <InputGroup>
        <label htmlFor="cardOwner">Nome do titular do cartão</label>
        <input type="text" id="cardOwner" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="cardCpf">CPF do titular do cartão</label>
        <input type="text" id="cardCpf" />
      </InputGroup>
    </Row>
    <Row>
      <InputGroup>
        <label htmlFor="cardName">Nome do Cartão</label>
        <input type="text" id="cardName" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="cardNumber">Número do cartão</label>
        <input type="text" id="cardNumber" />
      </InputGroup>
      <InputGroup maxWidth="123px">
        <label htmlFor="cardMonth">Mês do vencimento</label>
        <input type="text" id="cardMonth" />
      </InputGroup>
      <InputGroup maxWidth="123px">
        <label htmlFor="cardYear">Ano de vencimento</label>
        <input type="text" id="cardYear" />
      </InputGroup>
      <InputGroup maxWidth="48px">
        <label htmlFor="cardCVV">CVV</label>
        <input type="text" id="cardCVV" placeholder="123" />
      </InputGroup>
    </Row>
    <Row>
      <InputGroup maxWidth="116px">
        <label htmlFor="installments">Parcelamento</label>
        <select id="installments">
          <option>1x de 200,00</option>
          <option>2x de 100,00</option>
          <option>4x de 50,00</option>
        </select>
      </InputGroup>
    </Row>
    <Button type="button" title="Clique aqui para Finalizar">
      Finalizar compra
    </Button>
  </div>
)

export default Checkout

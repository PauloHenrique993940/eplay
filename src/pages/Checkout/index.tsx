import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Btn, ImageCartao, InputGroup, Row } from './styles'
import boleto from '../../assets/boleto.png'
import cartao from '../../assets/cart.jpg'

const validationSchema = Yup.object({
  fullName: Yup.string().required('Nome completo é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  cpf: Yup.string()
    .matches(/^\d{11}$/, 'CPF inválido')
    .required('CPF é obrigatório'),
  deliveryEmail: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  confirmDeliveryEmail: Yup.string()
    .oneOf([Yup.ref('deliveryEmail'), undefined], 'Os e-mails devem coincidir')
    .required('Confirmação do e-mail é obrigatória'),
  cardOwner: Yup.string().required('Nome do titular do cartão é obrigatório'),
  cardCpf: Yup.string()
    .matches(/^\d{11}$/, 'CPF inválido')
    .required('CPF do titular é obrigatório'),
  cardName: Yup.string().required('Nome do cartão é obrigatório'),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Número do cartão inválido')
    .required('Número do cartão é obrigatório'),
  cardMonth: Yup.string()
    .matches(/^\d{2}$/, 'Mês inválido')
    .required('Mês do vencimento é obrigatório'),
  cardYear: Yup.string()
    .matches(/^\d{4}$/, 'Ano inválido')
    .required('Ano de vencimento é obrigatório'),
  cardCVV: Yup.string()
    .matches(/^\d{3,4}$/, 'CVV inválido')
    .required('CVV é obrigatório')
})

const Checkout = () => (
  <Formik
    initialValues={{
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cardCpf: '',
      cardName: '',
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
      cardCVV: ''
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Form submitted:', values)
    }}
  >
    {({ handleSubmit }) => (
      <Form className="container" onSubmit={handleSubmit}>
        <Card title="Dados de cobrança">
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <Field id="fullName" type="text" name="fullName" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <Field id="cpf" type="text" name="cpf" />
              <ErrorMessage name="cpf" component="div" className="error" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados da entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <Field id="deliveryEmail" type="email" name="deliveryEmail" />
              <ErrorMessage
                name="deliveryEmail"
                component="div"
                className="error"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o email</label>
              <Field
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
              />
              <ErrorMessage
                name="confirmDeliveryEmail"
                component="div"
                className="error"
              />
            </InputGroup>
          </Row>
        </Card>
        <Button type="button" title="Clique aqui para Finalizar">
          Finalizar compra
        </Button>
      </Form>
    )}
  </Formik>
)

export default Checkout

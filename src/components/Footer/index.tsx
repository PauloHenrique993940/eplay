import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>AÇÂO</Link>
          </li>
          <li>
            <Link>AVENTURA</Link>
          </li>
          <li>
            <Link>ESPORTES</Link>
          </li>
          <li>
            <Link>SIMULAÇÃO</Link>
          </li>
          <li>
            <Link>ESTRATEGIA</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
// RPG AÇÂO AVENTURA ESPORTES SIMULAÇÃO ESTRATEGIA FPS - NOVIDADES EM BREVE 10:22

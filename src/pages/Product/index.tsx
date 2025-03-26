import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useEffect, useState } from 'react'
import { Game } from '../Home'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        {game.details ? (
          <p>
            <b>Plataforma:</b> {game.details.system || 'Não disponível'}
            <br />
            <b>Desenvolvedor:</b> {game.details.developer || 'Não informado'}
            <br />
            <b>Editora:</b> {game.details.publisher || 'Não informado'}
            <br />
            <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
            {game.details.languages?.join(', ') || 'Não informado'}
          </p>
        ) : (
          <p>Carregando detalhes do jogo...</p>
        )}
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media?.cover || ''}
        items={game.media?.gallery || []}
      />
    </>
  )
}

export default Product

import ProductsList from '../../components/ProductsList'
import resident from '../../assets/resident.png'
import diablo from '../../assets/diablo.png'
import zelda from '../../assets/zelda.png'
import starWars from '../../assets/star_wars.png'
import stret from '../../assets/stret.png'
import jogo from '../../assets/jogo.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categorias = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])
  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="gray" />
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="gray" />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categorias

import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/resident.png'
import diablo from '../../assets/diablo.png'
import zelda from '../../assets/zelda.png'
import starWars from '../../assets/star_wars.png'
import stret from '../../assets/stret.png'
import jogo from '../../assets/jogo.png'
import { useGetOnsaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  title: string
  system: string
  infos: string[]
  image: any
  category: string
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnsaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home

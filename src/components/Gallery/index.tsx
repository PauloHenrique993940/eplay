/* eslint-disable @typescript-eslint/no-unused-vars */
import Section from '../Section'
import { GalleryItem } from '../../pages/Home'
import Passaro from '../../assets/game/Passaro.png'
import Salao from '../../assets/game/Entrance_Screenshot_FINAL_4K.jpg'
import Combate from '../../assets/game/Combate.jpg'
import Play from '../../assets/icones/play.png'
import Zom from '../../assets/icones/zoom.png'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import ferchar from '../../assets/fechar.png'
import { useState } from 'react'
import spider from '../../assets/banner-homem-aranha.png'

const items: GalleryItem[] = [
  {
    type: 'image',
    url: Passaro
  },
  {
    type: 'image',
    url: Salao
  },
  {
    type: 'image',
    url: Combate
  },
  {
    type: 'image',
    url: spider
  },
  {
    type: 'video',
    url: 'https://assets.nintendo.com/image/upload/c_limit,f_auto,h_700,q_auto,w_1200/v1/ncom/software/switch/70010000000025/Video/posters/cfa326ed1fa5975e7b59180c9c73b3db05ca39788062658bdf9bfcaa79655aee'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}
const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zom
    return Play
  }
  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia  ${index} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a imagem"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={ferchar}
              alt="Icone fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery

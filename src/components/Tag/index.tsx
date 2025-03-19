import { TagContainer } from './styles'
export type Props = {
  size?: 'smail' | 'big'
  children: string
}

const Tag = ({ children, size = 'smail' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag

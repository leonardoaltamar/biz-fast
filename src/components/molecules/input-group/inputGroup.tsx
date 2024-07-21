import { InputGroupStyled } from './inputGroup-styled'
import './inputGroup.scss'

export const InputGroupMolecule = ({children}:any) => {
  return (
    <InputGroupStyled className="group">{children}</InputGroupStyled>
  )
}

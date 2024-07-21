import { LabelStyled } from './label-styled'
import './label.scss'
export const LabelAtom = ({label}:any) => {
  {/* <label className='label'> { label } </label> */}
  return (
    <LabelStyled> {label} </LabelStyled>
  )
}

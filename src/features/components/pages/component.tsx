import { InputGroupMolecule } from '../../../components/molecules/input-group/inputGroup'
import { InputAtom } from '../../../components/atoms/input/input'
import { LabelAtom } from '../../../components/atoms/label/label'
import { ButtonAtom } from '../../../components/atoms/button/button'

export const ComponentPage = () => {
  return (
    <div className='ml:container mx-auto p-8'>
      <h1 className='mb-2 text-xl font-bold text-center mb-8'>Componentes</h1>

      <div className='mb-8'>
        <h2 className='mb-2 text-xl'>Inputs</h2>

        <InputGroupMolecule className={'mb-5'}>
          <InputAtom outlined={true} />
          <LabelAtom>nombre</LabelAtom>
        </InputGroupMolecule>

        <InputGroupMolecule>
          <InputAtom />
          <LabelAtom>nombre</LabelAtom>
        </InputGroupMolecule>

      </div>

      <div className='mb-8'>
        <h2 className='mb-2 text-xl'>Buttons</h2>
        <ButtonAtom className={'mb-3'}>Ingresar</ButtonAtom>
        <ButtonAtom outlined={true}>Ingresar</ButtonAtom>
      </div>
    </div>
  )
}

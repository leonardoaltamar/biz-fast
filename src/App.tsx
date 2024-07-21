

import { InputAtom } from './components/atoms/input/input-styled'
import { LabelAtom } from './components/atoms/label/label'
import { InputGroupMolecule } from './components/molecules/input-group/inputGroup'

function App() {
  

  return (
    <div className='container mx-auto'>
      <h1 className='mb-2'>biz fast app</h1>  

      <InputGroupMolecule>
        <InputAtom outlined={true} />
        <LabelAtom label="nombre"></LabelAtom>    
      </InputGroupMolecule>
      
    </div>
  )
}

export default App

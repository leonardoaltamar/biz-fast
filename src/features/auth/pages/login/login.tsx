import { ButtonAtom } from "../../../../components/atoms/button/button"
import { CardAtom } from "../../../../components/atoms/card/card"
import { InputAtom } from "../../../../components/atoms/input/input"
import { LabelAtom } from "../../../../components/atoms/label/label"
import { InputGroupMolecule } from "../../../../components/molecules/input-group/inputGroup"

export const LoginPage = () => {
  return (
    <div className="background-primary min-h-full h-screen w-full flex justify-center items-center">
      <div className="w-4/12">
        <CardAtom>          

            <h1>Fast bits</h1>

            <InputGroupMolecule className={'mb-5'}>
              <InputAtom outlined={true} />
              <LabelAtom>Usuario</LabelAtom>
            </InputGroupMolecule>          

            <InputGroupMolecule className={'mb-5'}>
              <InputAtom outlined={true} />
              <LabelAtom>Contraseña</LabelAtom>
            </InputGroupMolecule>          

            <div className="w-full grid grid-cols-2 gap-2">
              <div>
                <ButtonAtom outlined={true}>Cancelar</ButtonAtom>
              </div>
              <div>
                <ButtonAtom >Ingresar</ButtonAtom>
              </div>
            </div>
        </CardAtom>
      </div>
    </div>
  )
}

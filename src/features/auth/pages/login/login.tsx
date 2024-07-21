import { Link } from "react-router-dom"
import { ButtonAtom } from "../../../../components/atoms/button/button"
import { CardAtom } from "../../../../components/atoms/card/card"
import { InputAtom } from "../../../../components/atoms/input/input"
import { LabelAtom } from "../../../../components/atoms/label/label"
import { InputGroupMolecule } from "../../../../components/molecules/input-group/inputGroup"

export const LoginPage = () => {
  return (
    <div className="background-primary min-h-full h-screen w-full flex justify-center items-center">
      <div className="min-w-12 w-full max-w-lg">
        <CardAtom>          

            {/* logo */}
            <strong className="logo mb-1">Fast bist</strong>

            <h1 className="font-bold text-xl mb-4">Iniciar sesión</h1>

            <InputGroupMolecule className={'mb-5'}>
              <InputAtom outlined={true} />
              <LabelAtom>Usuario</LabelAtom>
            </InputGroupMolecule>          

            <InputGroupMolecule className={'mb-5'}>
              <InputAtom outlined={true} />
              <LabelAtom>Contraseña</LabelAtom>
            </InputGroupMolecule>          

            <ButtonAtom className="mb-3">Ingresar</ButtonAtom>
            {/* <div className="w-full grid grid-cols-2 gap-2">
              <div>
                <ButtonAtom outlined={true}>Cancelar</ButtonAtom>
              </div>
              <div>
                <ButtonAtom >Ingresar</ButtonAtom>
              </div>
            </div> */}

            <p>¿No tienes cuenta? <Link to={''} className="link">Registrarte ahora</Link></p>
        </CardAtom>
      </div>
    </div>
  )
}

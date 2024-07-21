import { FC, PropsWithChildren } from "react"


export const CardAtom:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="background-white flex flex-col justify-center items-center rounded-md shadow-md w-full p-6">
        { children }
    </div>
  )
}

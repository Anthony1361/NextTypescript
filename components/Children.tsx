import { ReactNode } from "react"

type AnyName = {children : ReactNode}

const Children = ({children} : AnyName) => {
  return (
    <div>
       {children} 
    </div>
  )
}

export default Children
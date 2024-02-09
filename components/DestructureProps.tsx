

const DestructureProps = ({name, age} : {name: string; age: number}) => {
  return (
    <div>
      <h1>{name} {age}</h1>
    </div>
  )
}

export default DestructureProps
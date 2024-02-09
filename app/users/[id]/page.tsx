type UserShape = {
    params: {id: number}
}

const DynamicRoute = ({params: {id}}: UserShape) => {
  return (
    <div>{id}</div>
  )
}

export default DynamicRoute


const User = (props: {name: string; age: number}) => {
  return (
    <main>
       <h1>{props.name} {props.age}</h1> 
    </main>
  )
}

export default User
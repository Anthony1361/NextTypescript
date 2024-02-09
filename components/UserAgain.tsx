type AnyName = {name : string; age : number}

const UserAgain = ({name, age} : AnyName) => {
  return (
    <div>
       <h1>{name} {age}</h1>
    </div>
  )
}

export default UserAgain
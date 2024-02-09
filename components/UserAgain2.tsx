interface AnyName2 {name : string; age : number}

const UserAgain2 = ({name, age} : AnyName2) => {
  return (
    <div>
       <h1>{name} {age}</h1>
    </div>
  )
}

export default UserAgain2
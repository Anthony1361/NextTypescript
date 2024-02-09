export type info = {
    username : string;
    email : string;
    age : number;
    location : string[]
}

const ReuseableCom1 = ({username, email, age, location}: info) => {
  return (
    <div>
       <ul>
         <li>{username}</li>
         <li>{email}</li>
         <li>{age}</li>
         <li>{JSON.stringify(location)}</li>
      </ul> 
    </div>
  )
}

export default ReuseableCom1
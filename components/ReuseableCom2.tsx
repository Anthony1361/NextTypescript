import { info } from "./ReuseableCom1" 

type AdminInfo = info & {
    admin: string;
}

const ReuseableCom2 = ({username, email, age, location, admin}: AdminInfo) => {
  return (
    <div>
        <ul>
         <li>{username}</li>
         <li>{email}</li>
         <li>{age}</li>
         <li>{JSON.stringify(location)}</li>
         <li>{admin}</li>
      </ul> 
    </div>
  )
}

export default ReuseableCom2
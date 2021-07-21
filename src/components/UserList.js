import { useState } from 'react';
import { UserCard } from '../styled/UserCard';
import { UserDetails } from '../styled/UserDetails';
import { UserHeader } from '../styled/UserHeader';

export const UserList = ({ users }) => {
  const [ showUserDetails, setShowUserDetails ] = useState(null);
  const showDetails = (e) => setShowUserDetails(showUserDetails === e.target.id? null: e.target.id); 
  
  return <>
  {users.map(user => <UserCard key={user.id} id={user.id} showing={showUserDetails}>
    <UserHeader>
      <h4> {user.name} (email: {user.email}) </h4><button id={user.id} onClick={showDetails}>details</button>
    </UserHeader>
    {(showUserDetails === user.id.toString()) && <UserDetails>
        <div>{user.phone} / {user.website}</div>
        <div> {user.address.street}, {user.address.suite} </div>
        <div> {user.address.city}, {user.address.zipcode} </div>
      </UserDetails>
  }
    </UserCard>
  )}
</>}

/* 
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  
  */
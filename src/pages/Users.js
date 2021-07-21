
import { useContext } from "react";
import { UserList } from '../components/UserList'
import { OrderedList } from '../styled/OrderedList'

import { DataContext } from "../App";

export const Users = () => {

  const data = useContext(DataContext);

  return <OrderedList>
    <UserList users={data.userlist} />
    </OrderedList>
}
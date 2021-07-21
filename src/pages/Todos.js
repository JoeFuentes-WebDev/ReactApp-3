
import { useContext } from "react";
import { TodoList } from '../components/TodoList'
import { OrderedList } from '../styled/OrderedList'
import { DataContext } from "../App";

export const Todos = () => {

  const data = useContext(DataContext);
  console.log('data', data)

  return <OrderedList>
    <TodoList todos={data.todolist} />
    </OrderedList>
}
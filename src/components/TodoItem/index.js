import './index.css'
import {useState} from 'react'

const TodoItem = ({initialTodosList}) => {
  const [todos, setTodos] = useState(initialTodosList)

  const handleDelete = id => {
    const updatedTodos = todos.filter(item => item.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <ul>
      {todos.map(item => (
        <li key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoItem


import { useEffect, useState } from 'react';
import { ThemeContext } from './Themes/ThemeChanger';
import { useContext} from 'react';
import { Button } from '@mui/material';



function Todos() {

  const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([])
    const [editTodoid, setEditTodoId] = useState(null)
    const [editTodoText, setEditTodoText] = useState()  

   useEffect(()=>{

    // Retreive data from loggedInUserEmail
     const storedTodos = JSON.parse(localStorage.getItem(`todos_${loggedInUserEmail}`)) || [];
    setTodos(storedTodos)
   
   },[loggedInUserEmail])

  const handleTodo = (e) => {
    e.preventDefault
   if(newTodo.trim()!=='') {
    const updatedTodos=[...todos, {id:Date.now(), text:newTodo, completed:false}];
    setTodos(updatedTodos)
   setNewTodo('')

   localStorage.setItem(`todos_${loggedInUserEmail}`, JSON.stringify(updatedTodos));
   }else{
    alert('Feild are empty')
   }
  };

  const markcomplete = (id)=>{
    const updatedTodos=
        todos.map((todo)=> todo.id===id? {...todo,completed: !todo.completed}:todo);
        setTodos(updatedTodos)
        localStorage.setItem(`todos_${loggedInUserEmail}`, JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id!==id;
    })
    setTodos(updatedTodos)
    localStorage.setItem(`todos_${loggedInUserEmail}`, JSON.stringify(updatedTodos));
  }

  const editTodo = (id) => {
    setEditTodoId(id)
     setEditTodoText(todos.find((todo)=> todo.id===id).text);
  }

  const saveEdit = ()=>{
    const updatedTodos = 
      todos.map((todo)=> todo.id===editTodoid?{...todo, text:editTodoText}:todo)
      setTodos(updatedTodos)
    setEditTodoId(null);
    setEditTodoText('')
    localStorage.setItem(`todos_${loggedInUserEmail}`, JSON.stringify(updatedTodos));
  }
  

  const { theme } = useContext(ThemeContext)
  return (
    <>
        <h2>Todo List</h2>
        <div className="input">
          <input type='text' 
          placeholder='Enter a todo..'
           value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} 
            style={{
            background: theme == 'light' ? '#ea80fc' : 'transparent',
            border: theme == 'light' ? 'none' : '1px solid #ffff',
            color: theme == 'light' ? 'black' : '#ffff'
          }} />

          <Button style={{
            background: theme == 'light' ?  '#9c27b0' : 'transparent',
            border: theme == 'light' ? 'none' : '1px solid #ffff',
            color: theme == 'light' ? '#ffff' : '#ffff'
          }}  variant="contained"  color='secondary' size='small' onClick={handleTodo}>
            Add
          </Button>

        </div>

        <div className='todos'>
        {todos.map((todo)=>(
          <p key={todo.id}
          style={{textDecoration:todo.completed? 'line-through':'none'}}>
            {editTodoid===todo.id?(
              <>
              <input type='text' 
              value={editTodoText} 
              onChange={(e)=>setEditTodoText(e.target.value)}
              />
              <Button variant="contained" color='secondary' size='small' onClick={saveEdit}>
            save
          </Button>
              </>
              ) : (
                <>
             <span className='text'>{todo.text}</span> 
              <input type="checkbox" 
               checked={todo.completed}
                onChange={()=> markcomplete (todo.id)}/>
               <Button variant="contained" color='secondary' size='small' onClick={()=>editTodo(todo.id)}>
            Edit
          </Button>
          <Button variant="contained"  color='secondary' size='small' onClick={()=>deleteTodo(todo.id)}>
            Delete
          </Button>
              
              </>
              )}
               </p>
              ))}
      
        </div>
       
    </>
  )
}

export default Todos

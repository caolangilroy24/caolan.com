import React from 'react';
import { PageRoutes } from './PageRoutes';
// import Navbar from './components/Navbar';
// import { useState } from 'react';
import  './styles.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  return(
    <>
    <Navbar/>
    <div className='main-container'>
      <PageRoutes/>
    </div>
    {/* <Footer/> */}
    
    </>
  )
}
// function App() {
//   // const [todos, setTodos] = useState([{id: 1, name:'do 1', completed: false}, {id: 2, name:'do 2', completed: false}]) // returns a array, so we can destructure that array and set it epual to use state 
//   const [todos, setTodos] = useState([]) // returns a array, so we can destructure that array and set it epual to use state 
//   const todoNameRef = useRef()


//   useEffect(() => { // we want a useEffect to load the data
//     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     if(storedTodos) setTodos(storedTodos)
//   }, []) //give it an empty array so it is only called once as nothing in the array can change

//   useEffect(() => { //takes a function and an array of things to keep an eye on, anything in array changes, function called
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) // This saves our todo's to storage if array changes.
//   }, [todos])

//   function handleAddTodo() {
//     const name = todoNameRef.current.value
//     if (name === "") return
//     setTodos(prevTodos => {
//       return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
//     })
//     console.log(name)
//     todoNameRef.current.value = null
//   }

//   function toggleTodo(id){ // we arent able to use this function cause todo's are in tdl, in app, so gotta pass f down
//     const newTodos = [...todos] // in react should never directly modify a state var, instead copy, modify copy, set state var = copy
//     const todo = newTodos.find(todo => todo.id === id)
//     todo.complete = !todo.complete
//     setTodos(newTodos)
//   }
//   function handleClearTodos() {
//     const newTodos = todos.filter(todo => !todo.complete)
//     setTodos(newTodos)
    
//   }

//   return (
//     <>
//     <div>{(todos.filter(todo => !todo.complete)).length} left to do</div>
//     <input ref = {todoNameRef} type="text" />
//     <button onClick={handleAddTodo}>Add To do</button>
//     <button onClick={handleClearTodos}>Clear Completed</button>
//     <TodoList todos={todos} toggleTodo={toggleTodo}/>
//     </>
//   )
// }

export default App;

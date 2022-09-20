import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { createContext, useState } from 'react';
import CompletedTodo from './components/CompletedTodo';

export const TodoContext = createContext()

function App() {
  const [first, setfirst] = useState([])
  return (
    <div className="App">
      <TodoContext.Provider value={first} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListTodo/>}/>
          <Route path='/add' element={<AddTodo/>}/>
          <Route path='/completed' element={<CompletedTodo/>}/>
        </Routes>
      </BrowserRouter>
      </TodoContext.Provider >
    
    </div>
  );
}

export default App;

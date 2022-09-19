import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { createContext, useState } from 'react';

export const TodoContext = createContext()

function App() {
  const [first, setfirst] = useState([])
  return (
    <div className="App">
      <TodoContext.Provider value={first} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTodo/>}/>
          <Route path='/list' element={<ListTodo/>}/>
        </Routes>
      </BrowserRouter>
      </TodoContext.Provider >
    
    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { createContext } from 'react';

export const TodoContext = createContext()

function App() {
  return (
    <div className="App">
      <TodoContext.Provider value={"Emil"} >
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

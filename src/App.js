import './App.css';
import Signup from './components/Signup';
import{BrowserRouter,Routes, Route} from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route/>
  <Route/>
</Routes>
</BrowserRouter>

    

    
  );
}

export default App;
  // <Signup/>
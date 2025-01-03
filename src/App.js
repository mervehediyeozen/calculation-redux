import Main from './pages/Main';
import { Routes, Route } from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Main/>} />  {/* Ana sayfa route'u */}
      
      </Routes>
    </div>
  );
}

export default App;

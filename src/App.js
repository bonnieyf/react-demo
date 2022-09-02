import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import About from './components/About.js'
import Error from './components/Error.js'


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Herosection from './components/section-1/herosection.js';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Herosection/>
    
      <Projects/>
    </div>
    
  );
}

export default App;

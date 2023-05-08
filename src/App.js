
import './App.css';
import Navbar from './components/Navbar';
import User from "./components/User";

function App() {
  return (
    <div className="App">

      <Navbar title="User App2" />
      <User name="Kemal Can" salary="4000 €" department="Software" />
      <User name="Handan Kaan" salary="5000 €" department="Software " />
     
    </div>
    
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar';
import User from "./components/User";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <User name="Kemal Can" salary="4000 €" department="Software" />
      <User name="Handan Kaan" salary="5000 €" department="Software " />
      <style jsx>{`.b{color:blue ;background:#ffff56;font-size:20px;width:400px;text-align:center}.App{color:black ;background:#ffff56;font-size:30px;width:400px;text-align:center;`}</style>
    </div>
    
  );
}

export default App;

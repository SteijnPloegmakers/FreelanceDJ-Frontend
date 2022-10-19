import './App.css';
import DJRouter from "./router";
import DJNavbar from "./components/pages/shared/navbar";
function App() {
  return (

    <div className="App">
        <DJNavbar/>
      <div className="content">
        <DJRouter/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Router from "./router";
import DJNavbar from "./components/pages/shared/navbar";
function App() {
  return (

    <div className="App">
        <DJNavbar/>
      <div className="content">
        <Router/>
      </div>
    </div>
  );
}

export default App;

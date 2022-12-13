import "./App.css";
import Activities from "./Components/Activities/Activities";
import BannerButton from "./Components/BannerButton/index";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/NavBar/Navbar";
import SidePanel from "./Components/SidePanel/SidePanel";
import Create_Teams from "./Components/Create_Teams/Create_Teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "5.5%" }}>
          <SidePanel />
        </div>
        <div style={{ width: "100%" }}>
           {/* <Dashboard />   */}
          {/* <Activities/> */}
         <Create_Teams/>
        </div>
      </div>

      
    </div> 
  );
}

export default App;

import UsersComponent from "./pages/UsersComponent"; 
import DevelopersComponent from "./pages/DevelopersComponent";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";


function App(){
  return (
    <div>
      <NavBar/>
      { <Routes>
        <Route path="/" element={<UsersComponent/>}/>
        <Route path="/developers" element={<DevelopersComponent/>}/>
      </Routes> }
    </div>
  );
}

export default App;
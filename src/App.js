import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Reviews from "./Reviews";
import Contact from "./Contact";
import NavBar from "./NavBar";
function App() {
  return (<>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </>
  );
}

export default App;

import Footer from "./Layouts/Footer/footer"
import Navbar from "./Layouts/Navbar/navbar"
// import { CartProvider } from "react-use-cart";
import { Outlet } from "react-router-dom";
function App() {
  return (
<>


<Navbar/>

<Outlet></Outlet>

<Footer/>

</>

  );
}

export default App;

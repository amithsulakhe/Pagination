import { Jsondata } from "./components/Jsondata"
import Header from "./components/Header"
import Paginationcard from "./components/Paginationcard";
import Paginationbtns from "./components/Paginationbtns";
import Context from "./components/Context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
function App() {

  return (
    <>
    <Context>
    
       <Header/>
      <Paginationbtns/>
      </Context>
    </>
  )
}

export default App

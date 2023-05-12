import { Jsondata } from "./components/Jsondata"
import Header from "./components/Header"
import Paginationcard from "./components/Paginationcard";
import Paginationbtns from "./components/Paginationbtns";
import Context from "./components/Context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Provider } from "react-redux";
import Store from "./components/Store/Store";
import { CartComponent } from "./components/CartComponent";
function App() {

  return (
    <>
    <Context>
    
      <Provider store={Store}>
      <Header/>
      <Paginationbtns/>

      </Provider>
      </Context>
    
    </>
  )
}

export default App

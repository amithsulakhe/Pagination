import { Jsondata } from "./components/Jsondata"
import Header from "./components/Header"
import Paginationcard from "./components/Paginationcard";
import Paginationbtns from "./components/Paginationbtns";
import Context from "./components/Context";
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

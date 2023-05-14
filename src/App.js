import ProductTable from "./Components/ProductTable";
import ProductInformation from "./Components/ProductInformation";
import { useState } from "react";//

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [clicked, setClicked] = useState(false)
  return (
    <div className="App" style={{display:"flex"}}>
      <ProductTable setSelectedProduct = {setSelectedProduct} setClicked = {setClicked}></ProductTable>
      {
        clicked ?<ProductInformation selectedProduct = {selectedProduct}></ProductInformation>:
        <h1 style={{display:"flex", flexDirection:"column",
        margin:"10px", marginTop: "50px", padding: "10px", position:"relative"}}>Please Select a Product to See Details</h1>
      }
    </div>
  );
}

export default App;

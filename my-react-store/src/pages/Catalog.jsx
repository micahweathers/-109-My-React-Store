import Product from "../components/Product";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";
import "./Catalog.css"

function Catalog() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let service = new DataService()
    let data = service.getProducts()
    setProducts(data)
  }, [])
  
  return (
    <div className="catalog">
        <h1>Check out our new products!</h1>
        {products.map(prod => <Product key={prod._id} data={prod}/>)}
    </div>
  )
}

export default Catalog;
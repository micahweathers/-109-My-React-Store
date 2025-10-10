import Product from "../components/Product";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";
import "./Catalog.css"

function Catalog() {
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function loadProducts() {
        const service = new DataService();
        const data = await service.getProducts();
        setProducts(data);
        setProductsToDisplay(data);
    }
    loadProducts();
  }, [])

  function filterByCategory(category) {
    setActiveCategory(category);
    let filtered;
    if (category === "All") {
      filtered = [...products];
    } else {
      filtered = products.filter(prod => prod.category === category);
    }
    applySorting(filtered, sortOption);
  }

  function handleSort(option) {
    setSortOption(option);
    applySorting([...productsToDisplay], option);
  }

  function applySorting(productList, sortBy) {
    let sorted = [...productList];
    
    switch(sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-za":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    
    setProductsToDisplay(sorted);
  }

  const categories = [...new Set(products.map(prod => prod.category))];

  return (
    <div className="page-container">
      <h1>Check out our {products.length} amazing products!</h1>
      
      <div className="catalog-controls">
        <div className="filter-bar">
          <button 
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => filterByCategory("All")}
          >
            All
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => filterByCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-bar">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select"
            value={sortOption} 
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A to Z</option>
            <option value="name-za">Name: Z to A</option>
          </select>
        </div>
      </div>

      <div className="catalog">
        {productsToDisplay.map(prod => (
          <Product key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  )
}

export default Catalog;
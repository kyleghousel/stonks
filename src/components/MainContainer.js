import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [filter, setFilter] = useState(null)
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(res=>res.json())
      .then(setStocks)
  }, [])

  const handleAddToPortfolio = (id, name, price, ticker) => {
    const stock = {
      id,
      name,
      price,
      ticker
    }
    setPortfolio([...portfolio, stock])
  }

  return (
    <div>
      <SearchBar onFilter={setFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer selectedFilter={filter} onAddToPortfolio={handleAddToPortfolio} stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer  portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

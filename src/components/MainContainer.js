import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const MainContainer = () => {
  const [filter, setFilter] = useState(null)
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState(null)
  const [stocks, setStocks] = useState([])

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

    const alreadyAdded = portfolio.some(p => p.id === id);

    if (!alreadyAdded) {
      setPortfolio([...portfolio, stock]);
    }
  }

  return (
    <div>
      <SearchBar onFilter={setFilter} onSort={setSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer onAddToPortfolio={handleAddToPortfolio} selectedFilter={filter} selectedSort={sort} stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer  portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

import React from "react";
import Stock from "./Stock";

const StockContainer = ({ selectedFilter, selectedSort, onAddToPortfolio, stocks }) => {

  const filteredStocks = selectedFilter === null
    ? stocks
    : stocks.filter(stock => stock.type === selectedFilter)

  const filteredAndSortedStocks = selectedSort === null
    ? filteredStocks
    : selectedSort === 'Alphabetically'
      ? [...filteredStocks].sort((a, b) => a.name.localeCompare(b.name) )
      : [...filteredStocks].sort((a, b) => a.price - b.price )

  const renderStocks = filteredAndSortedStocks.map(({ id, name, price, ticker, type }) => (
    <Stock
      key={id}
      id={id}
      name={name}
      onAddToPortfolio={onAddToPortfolio}
      price={price}
      ticker={ticker}
      type={type}
      useCase = 'stock'
    />
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;

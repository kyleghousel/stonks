import React from "react";
import Stock from "./Stock";

const StockContainer = ({ selectedFilter, onAddToPortfolio, stocks }) => {

  const filteredStocks = selectedFilter === null
    ? stocks
    : stocks.filter(stock => stock.type === selectedFilter)

  const renderStocks = filteredStocks.map(({ id, name, price, ticker, type }) => (
    <Stock
      key={id}
      id={id}
      name={name}
      onAddToPortfolio={onAddToPortfolio}
      price={price}
      ticker={ticker}
      type={type}
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

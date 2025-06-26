import React from "react";
import Stock from "./Stock";

const PortfolioContainer = ({ portfolio }) => {
  const renderPortfolio = portfolio.map((stock) => (
      <Stock
        key={stock.price}
        id={stock.name}
        name={stock.name}
        price={stock.price}
        ticker={stock.ticker}
        useCase='portfolio'
      />
    ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolio}
    </div>
  );
}

export default PortfolioContainer;

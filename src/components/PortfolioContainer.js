import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {
  const renderPortfolio = portfolio.map((stock) => (
      <Stock
        key={stock.id}
        id={stock.name}
        name={stock.name}
        price={stock.price}
        ticker={stock.ticker}
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

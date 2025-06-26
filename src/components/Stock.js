import React, { useState } from "react";

const Stock = ({ id, name, onAddToPortfolio, price, ticker, useCase }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {

    useCase === 'stock'
      ? onAddToPortfolio(id, name, price, ticker)
      : setIsVisible(!isVisible)
  }

  return (
    <div>
      <div className="card" id={id} style={{cursor: 'pointer',  display: isVisible ? "block" : "none" }} onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: ${price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

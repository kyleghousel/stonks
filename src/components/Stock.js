import React from "react";

function Stock({ id, name, onAddToPortfolio, price, ticker }) {

  const handleClick = () => {
    onAddToPortfolio(id, name, price, ticker)
  }

  return (
    <div>
      <div className="card" id={id} style={{cursor: 'pointer'}} onClick={handleClick} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: ${price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

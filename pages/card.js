import React from "react";

export function Card({ children }) {
  return (
    <div className="card large">
      <div className="card-content">
        <div className="content">
          {children}
          <div className="background-icon">
            <span className="icon-barcode" />
          </div>
        </div>
      </div>
    </div>
  );
}

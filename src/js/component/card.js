import React from "react";

function Card({ url, title, links, level, text }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "24rem" }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-start">{title}</h5>
        </div>
        <ul className="navbar mx-3 fw-bold">
          <li className="list-group-item">{links}</li>
          <li className="list-group-item">{level}</li>
        </ul>
        <div className="card-text mx-3 text-start">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

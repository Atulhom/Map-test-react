import React from "react";

function Cards(params) {
  let infoCards = [
    {
      imgs: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg",
      title: "FAQ accordion",
      links: "🛢️🛤️⚓",
      level: "INTERMEDIATE",
      text: "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
    },
  ];

  let imgs = infoCards.map(function (item, index) {
    return item.imgs;
  });
  let title = infoCards.map(function (item, index) {
    return item.title;
  });
  let links = infoCards.map(function (item, index) {
    return item.links;
  });
  let level = infoCards.map(function (item, index) {
    return item.level;
  });
  let text = infoCards.map(function (item, index) {
    return item.text;
  });

  return (
    <div className="card mt-5 mx-auto" style={{ width: "24rem" }}>
      <img src={imgs} className="card-img-top" alt="..." />
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

    
  );
}

export default Cards;

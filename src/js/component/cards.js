import React from "react";
import Card from "./card";

function Cards(params) {
  let infoCards = [
    {
      imgs: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg",
      title: "FAQ accordion",
      links: "🛢️🛤️⚓",
      level: "INTERMEDIATE",
      text: "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
    },
    {
      imgs: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg",
      title: "FAQ accordion",
      links: "🛢️🛤️⚓",
      level: "INTERMEDIATE",
      text: "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
    },
    {
      imgs: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg",
      title: "FAQ accordion",
      links: "🛢️🛤️⚓",
      level: "INTERMEDIATE",
      text: "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
    },
    {
      imgs: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg",
      title: "FAQ accordion",
      links: "🛢️🛤️⚓",
      level: "INTERMEDIATE",
      text: "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
    },
    {
      imgs: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg",
      title: "FAQ accordion",
      links: "🛢️🛤️⚓",
      level: "INTERMEDIATE",
      text: "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
    },
    {
      imgs: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg",
      title: "FAQ accordion",
      links: "🛢️🛤️⚓",
      level: "INTERMEDIATE",
      text: "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
    },
  ];

  let infoCardsResult = infoCards.map(function (item, index) {
    return (
      // <div className="col-md-4 mb-4">
      //   <div className="card" style={{ width: "24rem" }}>
      //     <img src={item.imgs} className="card-img-top" alt="..." />
      //     <div className="card-body">
      //       <h5 className="card-title text-start">{item.title}</h5>
      //     </div>
      //     <ul className="navbar mx-3 fw-bold">
      //       <li className="list-group-item">{item.links}</li>
      //       <li className="list-group-item">{item.level}</li>
      //     </ul>
      //     <div className="card-text mx-3 text-start">
      //       <p>{item.text}</p>
      //     </div>
      //   </div>
      // </div>
      <Card
        url={item.imgs}
        title={item.title}
        links={item.links}
        level={item.level}
        text={item.text}
      />
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center">{infoCardsResult}</div>
    </div>
  );
}

export default Cards;

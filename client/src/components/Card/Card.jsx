import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">

      {/* 🦄q: hover하면 이미지가 바뀜.
        컨테이너안에 이미지가 2개있어야 함 */}
        <section className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </section>
        <h2>{item?.attributes.title}</h2>
        <section className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </section>
      </div>
    </Link>
  );
};

export default Card;

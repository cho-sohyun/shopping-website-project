import React from "react";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} />
      <div className="product-badges">
        {item?.new && (
          <Badge pill bg="danger" className="small-badge">
            new
          </Badge>
        )}
        {item?.choice && (
          <Badge pill bg="success" className="small-badge">
            컨셔스초이스
          </Badge>
        )}
      </div>

      <div>{item?.title}</div>
      <div>₩{item?.price?.toLocaleString()}</div>
    </div>
  );
};

export default ProductCard;

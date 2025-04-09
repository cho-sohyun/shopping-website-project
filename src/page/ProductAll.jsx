/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    let url = `https://my-json-server.typicode.com/cho-sohyun/shopping-website-project/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="product-all-container">
      <Container>
        <Row className="g-4">
          {productList.map((menu) => (
            <Col key={menu.id} lg={3} md={4} sm={6} xs={12}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;

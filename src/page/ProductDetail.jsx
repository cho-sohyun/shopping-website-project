/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className="product-detail-container">
      <Row>
        <Col md={6} className="product-detail-img">
          <img src={product?.img} alt={product?.title} />
        </Col>

        <Col md={6}>
          <div className="product-detail-info">
            <div className="product-badges">
              {product?.new && (
                <Badge pill bg="danger" className="small-badge">
                  new
                </Badge>
              )}
              {product?.choice && (
                <Badge pill bg="success" className="small-badge">
                  컨셔스초이스
                </Badge>
              )}
            </div>

            <div className="product-detail-title">{product?.title}</div>
            <div className="product-detail-price">
              ₩{product?.price?.toLocaleString()}
            </div>

            {product?.size && Array.isArray(product.size) && (
              <Dropdown onSelect={(e) => setSelectedSize(e)}>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="size-dropdown"
                >
                  {selectedSize
                    ? `사이즈 선택 : ${selectedSize}`
                    : "사이즈 선택"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {product.size.map((size, idx) => (
                    <Dropdown.Item key={idx} eventKey={size}>
                      {size}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}

            <Button variant="dark" className="add-button">
              추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

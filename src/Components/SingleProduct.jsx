import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> <strong> {prod.price} TL </strong> </span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_SEPET",
                  payload: prod,
                });
              }}
              variant="danger"
            >
              Remove from Sepet
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_SEPET",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Sepet"}{" "}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;

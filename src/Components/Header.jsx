import React from "react";
import {
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";

function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/">Shopping Cart</NavLink>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Ürün arayin"
            className="m-auto"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align={{ lg: "end" }}>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" className="m-2" />
              <span>{cart.length}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span> {prod.price} ₺</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_SEPET",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

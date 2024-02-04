import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import "../styles.css";
import Filters from "./Filters";

function Home() {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();

  console.log("searchQuery: ", searchQuery);

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("searchQuery: ", searchQuery);
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default Home;

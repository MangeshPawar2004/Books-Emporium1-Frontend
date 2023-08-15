import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Cards from "../Cards/Cards";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          minima repellendus necessitatibus ipsum magni impedit laborum a! Ut
          dolores quam reprehenderit temporibus eius cum vel. Dicta laborum
          dolorum consequuntur tenetur.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Cards item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

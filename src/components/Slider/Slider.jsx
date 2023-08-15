import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://img.freepik.com/free-vector/ecommerce-online-shopping-isometric-design-poster_1284-15291.jpg?size=626&ext=jpg&ga=GA1.2.836932828.1688401076&semt=ais",
    "https://img.freepik.com/premium-vector/concept-online-books-store-hand-pick-book-from-internet-device-illustrate_71983-1177.jpg?w=900",
    "https://img.freepik.com/premium-vector/business-man-with-books_48369-5718.jpg?w=900",
    "https://img.freepik.com/free-vector/online-library-isometric-design-concept_1284-23679.jpg?w=900&t=st=1691514956~exp=1691515556~hmac=cf659db51dda9ce328b0920f21da34f7f5271c9844dd3767bf3b754649c476a8",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 50}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;

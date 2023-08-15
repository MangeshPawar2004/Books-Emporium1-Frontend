import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Books</span>
          <span>Decode</span>
          <span>Question Paper</span>
          <span>Notes</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Mangesh Pawar</span>
          <span>mangeshpawar2004@gmail.com</span>
          <span>+91-7058410039</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Books Emporium</div>
          <div className="copyright">Copyright 2023. All Rights Reserved </div>
        </div>
        <div className="right">
          <img src="img\creditcardicons.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./styles.css";
import Footer from "./footer/Footer";

function Newsletter() {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      //add to firebase
    }
  };
  return (
    <div className="newsletter-master">
      <div className="newsletter-top"></div>
      <Div>
        <form onSubmit={submitHandler}>
          <input type="email" onChange={inputHandler} />
          <button type="submit">Submit</button>
        </form>
      </Div>
      <div className="newsletter-middle"></div>
      <div className="newsletter-bottom">
        <Footer />
      </div>
    </div>
  );
}
const Div = styled.div`
  background: #a7c4bc;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export default Newsletter;

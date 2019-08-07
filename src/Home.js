import React, { Component } from "react";
import Footer from "./Footer";

class Home extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="home">
        <h1>Home</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti praesentium fugiat, neque ea ullam modi quaerat quam officia
          in obcaecati voluptatibus quis autem nisi repudiandae perspiciatis
          earum recusandae veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti praesentium fugiat, neque ea ullam modi quaerat quam officia
          in obcaecati voluptatibus quis autem nisi repudiandae perspiciatis
          earum recusandae veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti praesentium fugiat, neque ea ullam modi quaerat quam officia
          in obcaecati voluptatibus quis autem nisi repudiandae perspiciatis
          earum recusandae veritatis.
        </p>
        <Footer />
      </div>
    );
  }
}

export default Home;

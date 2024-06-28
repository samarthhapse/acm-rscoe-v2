import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Blog.scss";
const Blog = () => {
  return (
    <div>
      <Navbar />
      <section className="blog-home-img">
        <img className="display-img" src="./assets/blog-home.png" alt="img" />
      </section>
      <section className="concept-of-day">
        <div className="concept-pop">
          <div>
            <p className="cod">Concept Of The Day</p>
            <div className="inside">
              <Link to="/concept-of-day">
                <button className="cod-check-button"> CHECK OUT</button>
              </Link>
              <img src="./assets/concept-logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="row"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;

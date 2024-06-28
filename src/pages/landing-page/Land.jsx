import React from "react";
import "./Land.scss";
import Navbar from "../../components/navbar/Navbar";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Land = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="intro">
        <div className="Content">
          <div className="left-content">
            <div className="head-line">
              A Team of <br /> <span className="head-line2">Enthusiastic</span>{" "}
              and <span className="head-line2">Passionate </span>
              <ul className="dynamic-txt">
                <li>
                  <span id="word1">ENGINEERS</span>
                </li>
                <li>
                  <span id="word2">STUDENTS</span>
                </li>
                <li>
                  <span id="word3">AND</span>
                </li>
                <li>
                  <span id="word4">FRIENDS</span>
                </li>
              </ul>{" "}
              <span id="static">ENGINEERS</span>
            </div>
            <div className="info"></div>
            {/* <div className='btn-div'>
              <motion.button className='btn'
                whileTap={{ scale: 0.5 }}>
                LET'S TALK!
              </motion.button>
            </div> */}
          </div>
          <div className="right-content">
            <img className="home-img" src="./assets/home.png" alt="img" />
          </div>
        </div>
      </section>
      <section className="teams">
        <div className="container">
          <div className="title">
            Our Teams
            <hr />
          </div>
          <div className="cardContainer">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className="team-img" src="./assets/content.png" alt="" />
                <p>
                  Crafting compelling narratives with unparalleled creativity
                  and avant-garde storytelling techniques
                </p>
                <div>
                  <Link to="/content-team">
                    <button className="view-btn">MEET </button>
                  </Link>
                </div>
              </div>
              <div className=" col-lg-4 col-md-4 col-sm cards">
                <img className="team-img" src="./assets/design.png" alt="" />
                <p>
                  Innovating aesthetic brilliance with cutting-edge visuals and
                  avant-garde design philosophies
                </p>
                <div>
                  <Link to="/design-team">
                    <button className="view-btn">MEET </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className="team-img" src="./assets/doc.png" alt="" />
                <p>
                  Meticulously chronicling every detail with precision, clarity,
                  and sophisticated documentation standards
                </p>
                <div>
                  <Link to="/documentation-team">
                    <button className="view-btn">MEET </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className="team-img" src="./assets/publicity.png" alt="" />
                <p>
                  Amplifying our presence with strategic, high-impact publicity
                  and cutting-edge communication tactics
                </p>
                <div>
                  <Link to="/publicity-team">
                    <button className="view-btn">MEET </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className="team-img" src="./assets/web.png" alt="" />
                <p>
                  Engineering seamless digital experiences with state-of-the-art
                  web technologies and innovative solutions
                </p>
                <div>
                  <Link to="/web-team">
                    <button className="view-btn">MEET </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className="team-img" src="./assets/soc.png" alt="" />
                <p>
                  Curating dynamic content and driving engagement with
                  innovative social media strategies
                </p>
                <div>
                  <Link to="/social-team">
                    <button className="view-btn">MEET </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="event">
        <div className="container">
          <div className="title">
            Our Latest Works
            <hr />
          </div>
          <div className="work-description">
            <div className="event-img">
              <video
                className="vid"
                autoPlay
                loop
                muted
                src="./assets/arVr.mp4"
              ></video>
            </div>
            <div className="event-des">
              <div className="event-info">
                Logica 3.0
                <p>State Level Project Competition</p>
                <p>
                  Date - 3rd May 2024
                  <br />
                  Mode - Hybrid (online and offline)
                </p>
              </div>
            </div>
          </div>
          {/* Eucation & Career */}
          <div className="work-description">
            <div className="event-img">
              <div className="event-info">
                Pradyot
                <p>
                  The Ray Of Light A creative Event on the occasion of
                  Engineer's Day
                </p>
                <p>Date of Event - 26th and 27th September 2023</p>
                {/* <button className="info-btn2">More Info</button> */}
              </div>
            </div>
            <div className="event-des">
              <video
                className="vid"
                autoPlay
                loop
                muted
                src="./assets/career.mp4"
              ></video>
            </div>
          </div>
          {/* Ganesh-Event */}
          <div className="work-description">
            <div className="event-img">
              <video
                className="vid"
                autoPlay
                loop
                muted
                src="./assets/ganesh.mp4"
              ></video>
            </div>
            <div className="event-des">
              <div className="event-info">
                Ganapati Decoration Competition
                <p>
                  Participants submitted the photo of their Ganpati Decoration.
                </p>
                <p>Timeline -2nd September</p>
              </div>
            </div>
          </div>

          {/* AR/VR */}

          <Link to="/events">
            <button className="explore-btn">EXPLORE MORE</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Land;

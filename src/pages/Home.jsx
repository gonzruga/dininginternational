import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroVideo1 from "../assets/img/video4.mp4";
import heroVideo2 from "../assets/img/video1.mp4";
import heroVideo3 from "../assets/img/video5.mp4";
import Subtitle from "../shared/Subtitle";
import item from "../assets/img/fork.png";
import experienceImg from "../assets/img/img17.jpeg";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedBookList from "../components/Featured-books/FeaturedBookList";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <h3 className="services_subtitle"> Know before you go</h3>
                  <img
                    style={{ width: "50px", height: "40px" }}
                    src={item}
                    alt=""
                  />
                </div>
                <h1>
                  Find your next hangout and meet cool{" "}
                  <span className="highlight">People</span>{" "}
                </h1>
                <p>
                  Welcome to Dining International to discover restaurants and to
                  discover new friends in three (3) simple steps.<br></br>
                  Step 1: Choose and click on a venue.<br></br>
                  Step 2: Fill in event details. <br></br>
                  Step 3: Show up. Other people will see and join.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <video controls src={heroVideo1} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video controls src={heroVideo2} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <video controls src={heroVideo3} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h3 className="services_subtitle"> What we serve</h3>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h5 className="services_subtitle"> Explore</h5>
              <h2 className="featured_book-title">
                Our Featured Events Venues
              </h2>
            </Col>
            <FeaturedBookList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <h3 className="services_subtitle"> Experience</h3>
                <h2>
                  With our all experience <br /> we will serve you{" "}
                </h2>
                <p>
                  Come and experience the joy of meeting great interesting
                  people. We believe you are one dinner away from meeting a
                  great friend, client or partner.
                </p>
              </div>
              <div className="counter-wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>5K+</span>
                  <h6>Successful Hangouts</h6>
                </div>
                <div className="counter_box">
                  <span>70K+</span>
                  <h6>Attendees</h6>
                </div>
                <div className="counter_box">
                  <span>2+</span>
                  <h6>Year's Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

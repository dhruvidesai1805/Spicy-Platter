import React from "react";
// import "../home/home.css"
import banner from "../../assests/images/bg.jpg";
import photo1 from "../../assests/images/photo1.jpeg";
// import photo2 from "../../assests/images/photo2.jpeg";
import logo from "../../assests/images/logo.jpg";
import thaliguj from "../../assests/images/gujthali.jpeg";
import thalinorth from "../../assests/images/norththatli.jpeg";
import burger from "../../assests/images/burger.jpeg";
import coke from "../../assests/images/coke.webp";
import thepla from "../../assests/images/thepla.webp";
import pasta from "../../assests/images/pasta.jpg";
import idli from "../../assests/images/idli.webp";
import main from "../../assests/images/main.png";
import halwa from "../../assests/images/halwa.jpg";
import chana from "../../assests/images/chanachole1.jpg";
// import panner from "../../assests/images/paneerb3.jpg";
import { Link } from "react-router-dom";
import "../../components/common/slider.css";
import Must1 from "../../assests/fotor_2023-4-25_13_43_52.jpg";
import Must2 from "../../assests/fotor_2023-4-25_14_2_45.jpg";
import Must3 from "../../assests/fotor_2023-4-25_14_10_4.jpg";
import Must4 from "../../assests/fotor_2023-4-25_14_16_15.jpg";

const Home = (props) => {
  console.log("Props");
  return (
    <>
      <div className="home-body">
        <section className="five">
          <div className="banner">
            <img src={banner} alt="" />
          </div>

          <div className="content">
            <h1 className="maintitle">Spicy Platter's</h1>
            <h1 className="quote">
              “Food is symbolic of love when words are inadequate.”
            </h1>

            <div className="button">
              <Link className="button-28" to="/reservation">
                Book A Table
              </Link>
              {/* <button className="button-28" role="button">Book A Table</button> */}
            </div>
          </div>
        </section>

        <section className="six special">
          <div className="box">
            <div className="photos">
              <img className="one" src={photo1} alt="" />
              {/* <img className="twomain" src={photo2} alt=""/> */}
            </div>
            <div className="information">
              <img src={logo} alt="" />
              <h2>Welcome To Spicy Platter's</h2>
              <p>
                Welcome to our restaurant where we offer a delightful culinary
                experience with a focus on fresh, locally-sourced ingredients.
                Our menu features a range of flavorful dishes that will satisfy
                any palate, served in a warm and welcoming atmosphere.
              </p>
              <p>
                "At Spicy Platter, we believe in minimizing food wastage and
                giving back to the community. That's why we've partnered with
                local NGOs to donate any excess food that is not consumed. You
                can also do your part in reducing food waste by opting to donate
                any uneaten food from your order. Simply let us know at the time
                of ordering, and we'll ensure that the food is safely and
                hygienically donated to those in need. Together, we can make a
                positive impact on our community and reduce food waste!"
              </p>
              
            </div>
          </div>
        </section>

        <section className=" seven special">
          <div id="best">
            <h2>BEST SPECALITIES</h2>
            <div className="bestsell">
              <div>
                <img src={burger} alt="" />
                <h2>
                  <span>P</span>izza Platter
                </h2>
              </div>
              <div>
                <img src={thaliguj} alt="" />
                <h2>
                  <span>G</span>ujarati Thali
                </h2>
              </div>
              <div>
                <img src={thalinorth} alt="" />
                <h2>
                  <span>P</span>unjabi Thali
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className=" eight special">
          <h2 className="h2">About Us</h2>
          <div className="all" id="about">
            <div className="bevrages">
              <h2>Beverages</h2>
              <img src={coke} alt="" />

              <p>
                "Experience the flavors of India with our extensive beverage
                menu, featuring traditional favorites like lassi and chai, as
                well as unique cocktails infused with exotic spices and herbs.
              </p>
            </div>
            <div className="categories">
              <div className="sec1">
                <div className="gujarati">
                  <h2>Gujarati</h2>
                  <img src={thepla} alt="" />

                  <p>
                    Experience the vibrant and diverse cuisine of Gujarat with
                    our menu of flavorful vegetarian dishes. From hearty daal to
                    savory dhokla, each bite is a celebration of India's rich
                    culinary heritage.
                  </p>
                </div>
                <div className="snacks">
                  <h2>Snacks</h2>
                  <img src={pasta} alt="" />
                  <p>
                    Satisfy your cravings with our delicious snacks menu,
                    featuring a variety of savory and crispy bites that are
                    perfect for any occasion. From Pizza's to Sandwiches, each
                    bite is a flavor-packed delight.
                  </p>
                </div>
              </div>

              <div className="main">
                <img src={main} alt="" />
              </div>

              <div className="sec2">
                <div className="south_indian">
                  <h2>South Indian</h2>
                  <img src={idli} alt="" />
                  <p>
                    Discover the rich and aromatic flavors of South India with
                    our menu of authentic dishes. From crispy dosas to spicy
                    curries, each bite is a journey through the region's diverse
                    culinary landscape.
                  </p>
                </div>
                <div className="dessert">
                  <h2>Desert</h2>
                  <img src={halwa} alt="" />
                  <p>
                    Indulge your sweet tooth with our delectable desert menu.
                    From classic favorites like creamy kulfi to decadent gulab
                    jamun, each bite is a heavenly experience that will leave
                    you craving for more.
                  </p>
                </div>
              </div>
            </div>
            <div className="sec3">
              <div className="north_indian">
                <h2>North Indian</h2>
                <img src={chana} alt="" />
                <p>
                  Embark on a culinary adventure through North India with our
                  menu of aromatic and hearty dishes. From creamy Panner Butter
                  Masala to flavorful biryanis, each bite is a celebration of
                  the region's rich culinary traditions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="nine special">
          <h2 className="h2">Must Try</h2>

          <div id="carouselExample" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Must1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Must2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Must3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Must4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
              {/* <span className="visually-hidden">Previous</span> */}
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
              {/* <span className="visually-hidden">Next</span> */}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;

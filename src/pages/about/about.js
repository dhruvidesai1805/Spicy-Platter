import React from "react";
import photo2 from "../../assests/images/photo2.jpeg";
// import photo1 from "../../assests/images/photo1.jpeg";
import logo from "../../assests/images/logo.jpg";

import "../about/about.css";
// import "../about/banner.css"

const About = () => {
  return (
    <>
      <div className="about-body">
        <section>
          <div className="abc">
            <p className="about-fade-photos">About</p>
            <p className="about-banner-text-photos">About Us</p>
          </div>
        </section>

        <section className="six">
          <div className="box">
            <div className="photos">
              <img className="one" src={photo2} alt="" />
              {/* <img className="two" src={photo1} alt=""/> */}
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
              <p className="" style={{ color: "#fff" }}>
                At Spicy Platter, we believe in minimizing food wastage and
                giving back to the community. That's why we've partnered with
                local NGOs to donate any excess food that is not consumed. You
                can also do your part in reducing food waste by opting to donate
                any uneaten food from your order. Simply let us know at the time
                of ordering, and we'll ensure that the food is safely and
                hygienically donated to those in need. Together, we can make a
                positive impact on our community and reduce food waste!
              </p>
              <p style={{ color: "#fff" }}>
                Donating your uneaten food is easy and hassle-free. Just let us
                know at the time of ordering, and we'll take care of the rest.
                It's a simple way to give back and make a positive impact on our
                community
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

import React from "react";
import chair from "../../assests/images/nk8RAbag5LEd7sX5a62GwW.jpg";
import axios from 'axios';
import { useState } from "react";

/**
 * The above function defines a React component called Contact that initializes a state object with
 * empty values for Name, Email, Number, Message, and id.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Number: '',
    Message: '',
  });
  const [val, setVal] = useState({
      Name: "",
      Email: "",
      Number: "",
      Message: "",
      id:""
  });
  const [successMessage, setSuccessMessage] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch("process.env.REACT_APP_API_URLapi/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
      setSuccessMessage(data.message);

    } else {
    }
  };
  return (
    <>
      <div className="contact-body">
        <section>
          <div className="abc">
            <p className="about-fade">Contact</p>
            <p className="about-banner-text">Contact Us</p>
          </div>
        </section>
      </div>
      <section className="contact-form">
        <div className="container-contact">
          <div className="form-wrapper">
            <div className="company-address">
              <div className="address-group">
                <i className=" fas fa-map-marker-alt fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Location</h2>
                <p className="text-white"> 204,Kansas,Ghodasar,Ahmedabad </p>
              </div>
              <div className="address-group">
                <i className=" far fa-envelope fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Email</h2>
                <p className="text-white">contact@spicyplatter.com</p>
              </div>
              <div className="address-group">
                <i className="fa fa-phone fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Call</h2>
                <p className="text-white">+91123456789</p>
              </div>

              <img src={chair} alt="error" />
            </div>
            <div action="" className="form">
              <h1 className="lg-heading text-white">Contact us</h1>
              <p className="text-gray">
                Letus know your questions,suggestions and concerns by filling
                out the contact form below.
              </p>
            </div>
            <form className="form" onSubmit  ={(e)=>{handleSubmit(e); e.preventDefault();}}>
              <div className="form-group">
                <label htmlFor="name">UserName:</label>
                <input type="text" name="Name" required placeholder="Name" onChange={(e) => handleChange(e)} value={val === null ? "" : formData?.Name} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="Email" required placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => handleChange(e)} value={val === null ? "" : formData?.Email} />
              </div>
              <div className="form-group">
                <label htmlFor="numberr">Phone-No:</label>
                <input type="number" name="Number" required placeholder="Phone No:" pattern="[0-9]{10}" onChange={(e) => handleChange(e)} value={val === null ? "" : formData?.Number} />
              </div>
              <div className="form-group">
                <label htmlFor="text">Message:</label>
                <textarea name="Message" required placeholder="Message" onChange={(e) => handleChange(e)} value={val ? formData?.Message : " "}></textarea>
              </div>
              <button type="submit" className="form-btn">Submit</button>
              <div> {successMessage && <strong className="text-success fs-2 w-50 mb-4 text float-end">{successMessage} <br></br>Thank you..</strong>}
           </div>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};
export default Contact;

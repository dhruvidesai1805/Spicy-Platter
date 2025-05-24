import React, { useState } from "react";
import axios from "axios";

import "../reservation/reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    number: "",
    date: "",
    time: "",
    persons: 0,
    message: "",
    donate_food: false,
    food_wastage_notes: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(formData,"formData")


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch("process.env.REACT_APP_API_URLapi/reservation", {
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
      setFormData("")
    } else {
    }
  };


  return (
    <>
      <div className="reserve-body">
        <section>
          <div className="abc">
            <p className="about-fade-photos">Reservation</p>
            <p className="about-banner-text-photos">Book Table</p>
          </div>
        </section>

        <section className="reservation">
          <div className="container1">
            <div className="timing-wrapper">
              <div className="opening">
                <div className="timing">
                  <h3>Time</h3>
                </div>
                <div className="timing">
                  <h2>Open</h2>
                </div>
                <div className="timing">
                  <span>MONDAY-FRIDAY</span>

                  <p>
                    7AM - 10AM (Breakfast)
                    <br />
                    11AM - 10PM (Lunch/Dinner)
                  </p>
                </div>
                <div className="timing">
                  <span>SATURDAY-SUNDAY</span>

                  <p>
                    8AM - 1PM (Brunch)
                    <br />
                    1PM - 11PM (Lunch/Dinner)
                  </p>

                  <hr />
                </div>

                <div className="timing">
                  <h6 className="hi">789 - 456 - 0342</h6>
                </div>
              </div>
            </div>

            <div className="container">
              <form
                id="reservation-form"
                onSubmit={handleSubmit}
              >
                <div className="backk">
                  <div className="backone">
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="clientName"
                        required
                        onChange={(e) => handleChange(e)}
                        value={formData ? formData?.clientName : " "}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        onChange={(e) => handleChange(e)}
                        value={formData ? formData?.email : " "}
                      />
                    </div>
                  </div>

                  <div className="backtwo">
                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="text"
                        className="form-control"
                        pattern="[1-9]{1}[0-9]{9}"
                        maxLength="10"
                        id="phone"
                        name="number"
                        required
                        onChange={(e) => handleChange(e)}
                        value={formData ? formData?.number : " "}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="date">Date:</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        required
                        onChange={(e) => handleChange(e)}
                        value={formData ? formData?.date : " "}
                      />
                    </div>
                  </div>

                  <div className="backthree">
                    <div className="form-group">
                      <label htmlFor="time">Time:</label>
                      <input
                        type="time"
                        className="form-control"
                        id="time"
                        name="time"
                        required
                        onChange={(e) => handleChange(e)}
                        value={formData ? formData?.time : " "}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="party-size">Persons</label>
                      <input
                        type="number"
                        className="form-control"
                        id="party-size"
                        name="persons"
                        min="1"
                        max="10"
                        required
                        onChange={(e) => handleChange(e)}
                        value={formData ? formData?.persons : 0}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="textlabel" htmlFor="special-requests">
                    Special Requests:
                  </label>
                  <textarea
                    className="form-control w-90"
                    id="message"
                    name="message"
                    rows="3"
                    onChange={(e) => handleChange(e)}
                    value={formData === null ? "" : formData?.message}
                  ></textarea>
                </div>
                <p className="ml-2" style={{ color: "#fff" }}  >
                  At Spicy Platter, we're committed to sustainability and
                  reducing our environmental impact. By donating food instead of
                  throwing it away, we're doing our part to create a more
                  sustainable future.
                </p>
                <div className="form-group">
                  <div className="d-flex ml-2">
                  <label className=" pr-2">
                    <input type="checkbox"  name="donate_food"  onChange={(e) => handleChange(e)} className=" pr-2"  value={formData.donate_food} />
                   
                  </label>
                <p style={{ color: "#fff" ,marginRight:"5px"}} className="pt-2 ml-2 pl-2">I would like to donate any uneaten food to those in need.</p>  
                </div>
<br/>
                  <textarea
                    name="food_wastage_notes"
                    rows="3"
                    cols="12"
                    className="w-100 h-50"
                    value={formData.food_wastage_notes}
                    onChange={(e) => handleChange(e)}
                    placeholder="Please let us know if you have any specific instructions regarding your uneaten food."
                  ></textarea>
                </div>{" "}
          
                <button type="submit" className="btn btn-primary button-24 mb-2">
                  Submit
                </button>
                <div> {successMessage && <strong className="text-success fs-2 w-50 mb-4 text float-end">{successMessage} <br></br>Thank you..</strong>}
           </div>
              
              </form>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Reservation;

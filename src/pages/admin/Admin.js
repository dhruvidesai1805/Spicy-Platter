import { React, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../pages/admin/admin.css";


const Admin = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const getApi = () => {
    // axios.get("http://localhost:3004/tables").then((resultt) => {
    //   setData1(resultt.data);
    //   { console.log("data book", resultt.data) }
    // });

    const options = {
      method: "GET",
      url: "https://contact-form-api-ebej.onrender.com/api/tablebookings",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getApi2 = () => {
    axios.get("http://localhost:3004/contactus").then((result) => {
      setData(result.data);
      {
        console.log("contact", result.data);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("process.env.REACT_APP_API_URLapi/contact");
        const responseData = await response.json();
        console.log(responseData,"response")
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("process.env.REACT_APP_API_URLapi/reservation");
        const responseData = await response.json();
        console.log(responseData,"respons234543e")
        setData1(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



  
  


  const removeId = async (id) => {
    await axios.delete(`http://localhost:3004/tables/${id}`);
    getApi();
  };
  const removeId2 = async (id) => {
    await axios.delete(`http://localhost:3004/contactus/${id}`);
    getApi2();
  };

  useEffect(() => {
    getApi();
    getApi2();
  }, []);

  const reservationDelete = async (id) => {
    try {
      const response = await fetch(`process.env.REACT_APP_API_URLapi/reservation/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Deletion successful');
        // Data successfully deleted from the backend
        // Update the state or perform any other necessary actions
      } else {
        console.log('Deletion failed');
        // Handle the error
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  
    // If you're working with a local state, you can remove the item directly:
    setData1((prevData) => prevData.filter((reservation) => reservation._id !== id));
  };
  
  const userDelete = async (id) => {
    try {
      const response = await fetch(`process.env.REACT_APP_API_URLapi/contact/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Deletion successful');
        // Data successfully deleted from the backend
        // Update the state or perform any other necessary actions
      } else {
        console.log('Deletion failed');
        // Handle the error
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  
    // If you're working with a local state, you can remove the item directly:
    setData((prevData) => prevData.filter((user) => user._id !== id));
  };
  

  return (
    <>
      <div className="px-3 background-color">
        <div className="container-fluid">
          <div className="row g-3 py-2">
            <div className="oone col-md p-3">
              <div className="p-3 shadow-sm  d-flex justify-content-evenly align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(data1).length}</h3>
                  <p className="fs-2">User</p>
                </div>
                <i id="adminicon1" className="bi bi-person p-3 fs-1"></i>
              </div>
            </div>
            <div className="twoo col-md p-3">
              <div className="p-3  shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(data1).length}</h3>
                  <p className="fs-2">Table booked</p>
                </div>
                <i id="adminicon2" className="bi bi-bookmark p-3 fs-1"></i>
              </div>
            </div>

            <table className="table caption-top  rounded">
              <caption className=" this text-white fs-3">
                {" "}
                Table Booking Data
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="fs-4 p-4">
                    No.
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Name
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Phone
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Email
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Date
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Time
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Presons
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    message
                  </th>
                  <th scope="col" className="fs-4 p-4"></th>
                </tr>
              </thead>
              <tbody>
                {data1.map((users, index) => (
                  <>
                    <tr>
                      <th scope="row" className="fs-5 p-4 ">
                        {users.id}
                      </th>
                      <td className="fs-5 p-4">{users.clientName}</td>
                      <td className="fs-5 p-4">+91 {users.number}</td>
                      <td className="fs-5 p-4">{users.email}</td>
                      <td className="fs-5 p-4">{users.date}</td>
                      <td className="fs-5 p-4">{users.time}</td>
                      <td className="fs-5 p-4">{users.persons}</td>
                      <td className="fs-5 p-4">{users.message}</td>
                      <td className="fs-5 p-4">
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={() => reservationDelete(users._id)}
                        ></button>
                      </td>

                      {/* <td><button type="button" className="btn btn-danger dlt-btn" onClick={()=>removeId(user.id)}><ion-icon name="close"></ion-icon></button></td> */}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>

            {/* // contactus table start  */}
            <table className="table caption-top  rounded">
              <caption className=" this text-white fs-3">
                {" "}
                ContactUS Data
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="fs-4 p-4">
                    No.
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Name
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Phone
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    Email
                  </th>
                  <th scope="col" className="fs-4 p-4">
                    message
                  </th>
                  <th scope="col" className="fs-4 p-4"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <>
                    <tr>
                      <th scope="row" className="fs-5 p-4">
                        {user.id}
                      </th>
                      <td className="fs-5 p-4">{user.Name}</td>
                      <td className="fs-5 p-4">+91 {user.Number}</td>
                      <td className="fs-5 p-4">{user.Email}</td>
                      <td className="fs-5 p-4">{user.Message}</td>
                      <td className="fs-5 p-4">
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={() => userDelete(user._id)}
                        ></button>
                      </td>

                      {/* <td><button type="button" className="btn btn-danger dlt-btn" onClick={()=>removeId(user.id)}><ion-icon name="close"></ion-icon></button></td> */}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

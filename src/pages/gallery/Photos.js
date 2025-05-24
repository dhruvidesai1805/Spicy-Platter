import React from "react";
import idly from "../../assests/images/gallery/photos/idly2.jpeg"
import dosa from "../../assests/images/gallery/photos/dosa1.jpeg"
import sambar_vada from "../../assests/images/gallery/photos/sambarvada.jpeg"
import uttapam from "../../assests/images/gallery/photos/uttapams.jpg"
import vadapav from "../../assests/images/gallery/photos/vadapav.jpg"
import pavbhaji from "../../assests/images/gallery/photos/pavbhaji.jpg"
import samosa from "../../assests/images/gallery/photos/samosa.jpeg"
import vegfrankie from "../../assests/images/gallery/photos/paneer roll.jpg"
import paneertikka from "../../assests/images/gallery/photos/paneertikka.jpeg"
import paneercrispy from "../../assests/images/gallery/photos/paneercrispy.jpg"
import paneerchilli from "../../assests/images/gallery/photos/paneerchili.jpg"
import palakpaneer from "../../assests/images/gallery/photos/palakpaneer.jpg"
import burger from "../../assests/images/gallery/photos/burger.jpeg"
import sandwich from "../../assests/images/gallery/photos/sandwich.jpg"
import hotdog from "../../assests/images/gallery/photos/hotdog.jpeg"
import frenchfries from "../../assests/images/gallery/photos/frecchfries.jpeg"
import brownie from "../../assests/images/gallery/photos/brownie.jpeg"
import rasmalai from "../../assests/images/gallery/photos/rasmalai.jpg"
import gulabjamun from "../../assests/images/gallery/photos/gulabjamun.jpeg"
import gajarkahalwa from "../../assests/images/gallery/photos/gajarkahalwa.jpeg"
const Photos = () => {
  return (
    


    <>
    <div className="gallery-body"> 
         <section>
        <div className="abc">
          <p className="about-fade-photos">Gallery</p>
          <p className="about-banner-text-photos">Photos</p>
        </div>
      </section>
      {/* // banner end ------------------ // Gallery start ---------------- */}
      <div className="gallery">
        <h1>Photos</h1>
      </div>
      {/* // Photos Section ---------------- */}
      <div className="vishal">
        <div className="card">
          <div className="image">
            <img src={idly}/>
          </div>
          <div className="details">
            <div className="center">
              <h1>Idli Sambar</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={dosa} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Dosa</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={sambar_vada} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Sambar Vada</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={uttapam} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Uttapam</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={vadapav} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Vadapav</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={pavbhaji} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Pav Bhaji</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={samosa} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Samosa</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={vegfrankie} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Veg Frankie</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src= {paneertikka} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Paneer Tikka</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={paneercrispy} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Paneer Crispy</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={paneerchilli} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Paneer Chilli</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={palakpaneer} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Palak Paneer & Butter Naan</h1>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={burger} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Burger</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={sandwich} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Sandwich</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={hotdog} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Hot Dog</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={frenchfries} />
          </div>
          <div className="details">
            <div className="center">
              <h1>French Fries</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={brownie} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Brownie</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={rasmalai} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Rasmalai</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={gulabjamun} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Gulabjamun</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={gajarkahalwa} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Gajar Ka Halwa</h1>
            </div>
          </div>
        </div>
      </div>
      {/* // Photos Section End -----------------  */}
      {/* // Gallery Section end ----------------  */}
      {/* // back to top button start------------ */}
        
  
      </div>
      </>

  );
};
export default Photos;

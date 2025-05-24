import React from "react";

//gujarati//
import sevtomato from "../../assests/images/sevtomato.jpg";
import lasanbataka from "../../assests/images/Lehsuniya__Lasaniya_Batata_Gujrati_Grlic_Potato_Curry.jpg";
import thepla from "../../assests/images/thepla.webp";
import mug from "../../assests/images/mug.webp";
import undhiyu from "../../assests/images/undhiyu.jpeg";
import vagrotlo from "../../assests/images/vag_rotlo.avif";
import jeerarice from "../../assests/images/jeera_rice.jpg";
import rotlo from "../../assests/images/rotlo_olo.jpg";
//north//
import Pannerbutter from "../../assests/images/paneerb1.jpg";
import Pannetikka from "../../assests/images/paneert7.jpg";
import Muterpaner from "../../assests/images/matarp9.jpg";
import Dalmakhni from "../../assests/images/dalm2.jpg";
import Chana from "../../assests/images/chanachole2.jpg";
import Kofta from "../../assests/images/malai6.jpg";
import Rajma from "../../assests/images/rajma1.jpg";
import Daltadka from "../../assests/images/dalt5.jpg";
///
import rava from "../../assests/images/rava.jpg";
import lemonrice from "../../assests/images/Lemon-Rice.jpg";
import parotta from "../../assests/images/Parotta.webp";
import vada from "../../assests/images/Vada.jpg.webp";
import coconutrice from "../../assests/images/Coconut-Rice.jpg.webp";
import pongal from "../../assests/images/Pongal.jpg.webp";
import dosa from "../../assests/images/Dosa-1.webp";
import idli from "../../assests/images/idli.webp";
///
import strawberry from "../../assests/images/strawberry.jpg";
import halwa from "../../assests/images/halwa.jpg";
import gulabjamun from "../../assests/images/gulabjamun.jpg";
import cupcake from "../../assests/images/cupcake.jpg";
import kheer from "../../assests/images/Kheer.jpg";
import rasmalai from "../../assests/images/rasmalai.jpg";
import rasgulla from "../../assests/images/rasgulla.jpg";
import icecream from "../../assests/images/ice-cream.jpg";

//snackks//
import coke from "../../assests/images/coke.webp";
import smoothie from "../../assests/images/smoothies.jpg";
import milkshake from "../../assests/images/cocomilshake.webp";
import beansandwich from "../../assests/images/greenBeanSandwich.webp";
import pasta from "../../assests/images/pasta.jpg";
import grillsandwich from "../../assests/images/grillsandwich.webp";
import burstpizza from "../../assests/images/CheeseBurst.webp";
import doublecheese from "../../assests/images/Double Cheese pizza.jpg";

import "../../pages/menu/menu.css";
import "../about/banner.css";

const Menu = () => {
  return (
    <>
      <div className="menu-body">
        <h2 class="mennnutitle"> Gujarati Menu</h2>
        <div class="this">
          <div class="food-item-card">
            <img src={sevtomato} alt="Food Item Image" />
            <h3>SevTomato</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={lasanbataka} alt="Food Item Image" />
            <h3>Lasaniya Bataka</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={thepla} alt="Food Item Image" />
            <h3>Thepla</h3>

            <span class="food-item-price">100 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={mug} alt="Food Item Image" />
            <h3>Mug Nu Shak</h3>

            <span class="food-item-price">130 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <div class="this2">
          <div class="food-item-card">
            <img src={undhiyu} alt="Food Item Image" />
            <h3>Undhiyu</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={vagrotlo} alt="Food Item Image" />
            <h3>Vagahrelo Rotlo</h3>

            <span class="food-item-price">140 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={jeerarice} alt="Food Item Image" />
            <h3>Jeera Rice</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={rotlo} alt="Food Item Image" />
            <h3>Rotlo</h3>

            <span class="food-item-price">60 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <h2 class="mennnutitle"> South-Indian Menu</h2>
        <div class="this">
          <div class="food-item-card">
            <img src={idli} alt="Food Item Image" />
            <h3>Idly</h3>

            <span class="food-item-price">80 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={rava} alt="Food Item Image" />
            <h3>Rava Idly</h3>

            <span class="food-item-price">80 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={dosa} alt="Food Item Image" />
            <h3>Dosa</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={lemonrice} alt="Food Item Image" />
            <h3>Lemon Rice</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <div class="this2">
          <div class="food-item-card">
            <img src={vada} alt="Food Item Image" />
            <h3>Vada</h3>

            <span class="food-item-price">80 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={pongal} alt="Food Item Image" />
            <h3>Pongal</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={parotta} alt="Food Item Image" />
            <h3>Parotha</h3>

            <span class="food-item-price">100 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={coconutrice} alt="Food Item Image" />
            <h3>Coconut Rice</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <h2 class="mennnutitle"> North-Indian Menu</h2>
        <div class="this">
          <div class="food-item-card">
            <img src={Pannerbutter} alt="Food Item Image" />
            <h3>Panner Butter Masala</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={Pannetikka} alt="Food Item Image" />
            <h3>Panner Tikka</h3>

            <span class="food-item-price">180 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={Muterpaner} alt="Food Item Image" />
            <h3>Muttor Panner</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={Dalmakhni} alt="Food Item Image" />
            <h3>Dal Makhni</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <div class="this2">
          <div class="food-item-card">
            <img src={Daltadka} alt="Food Item Image" />
            <h3>Dal Tadka</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={Chana} alt="Food Item Image" />
            <h3>Chana Masala</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={Kofta} alt="Food Item Image" />
            <h3>Maliy Kofta</h3>

            <span class="food-item-price">180 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={Rajma} alt="Food Item Image" />
            <h3>Rajma Chawal</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <h2 class="mennnutitle"> Desert</h2>
        <div class="this">
          <div class="food-item-card">
            <img src={strawberry} alt="Food Item Image" />
            <h3>StrawBerry Cheese Cake</h3>

            <span class="food-item-price">80 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={halwa} alt="Food Item Image" />
            <h3>Gajar Ka Halwa</h3>

            <span class="food-item-price">100 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={gulabjamun} alt="Food Item Image" />
            <h3>Gulab Jamun</h3>

            <span class="food-item-price">60 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={cupcake} alt="Food Item Image" />
            <h3>CupCake</h3>

            <span class="food-item-price">100 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <div class="this2">
          <div class="food-item-card">
            <img src={rasgulla} alt="Food Item Image" />
            <h3>Rasgulla</h3>

            <span class="food-item-price">60 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={rasmalai} alt="Food Item Image" />
            <h3>Rasmaliy</h3>

            <span class="food-item-price">80 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={kheer} alt="Food Item Image" />
            <h3>Kheer</h3>

            <span class="food-item-price">70 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={icecream} alt="Food Item Image" />
            <h3>Ice Cream</h3>

            <span class="food-item-price">50 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <h2 class="mennnutitle"> Snacks & Bevrages</h2>
        <div class="this">
          <div class="food-item-card">
            <img src={coke} alt="Food Item Image" />
            <h3>Coca-Cola</h3>
            <span class="food-item-price">30 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={smoothie} alt="Food Item Image" />
            <h3>Blue Berry Smoothie</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={grillsandwich} alt="Food Item Image" />
            <h3>Grill Sandwich</h3>

            <span class="food-item-price">100 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={beansandwich} alt="Food Item Image" />
            <h3>Green Bean Sandwich</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>

        <div class="this2">
          <div class="food-item-card">
            <img src={milkshake} alt="Food Item Image" />
            <h3>Chocolate MilkShake</h3>

            <span class="food-item-price">120 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={burstpizza} alt="Food Item Image" />
            <h3>Cheese Burst Pizza</h3>

            <span class="food-item-price">200 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
          <div class="food-item-card">
            <img src={doublecheese} alt="Food Item Image" />
            <h3>Double Cheese Pizza</h3>

            <span class="food-item-price">250 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>

          <div class="food-item-card">
            <img src={pasta} alt="Food Item Image" />
            <h3>Pasta</h3>

            <span class="food-item-price">150 Rs</span>
            <button class="add-to-cart-btn">Add to Food Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;

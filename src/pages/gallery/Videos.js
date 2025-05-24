import React from "react";
import "../../pages/gallery/gallery.css"
import springroll from "../../assests/images/gallery/videos/31.mp4"
import pannermakhni from "../../assests/images/gallery/videos/26.mp4"
import pannerkathiroll from "../../assests/images/gallery/videos/28.mp4"
import milkshek from "../../assests/images/gallery/videos/78.mp4"
import ravadosa from "../../assests/images/gallery/videos/16.mp4"
import garlicbread from "../../assests/images/gallery/videos/20.mp4"
import periperi from "../../assests/images/gallery/videos/14.mp4"
import desserts from "../../assests/images/gallery/videos/70.mp4"

const Videos = () => {
  return (



<>

    <div className="gallery-body">
    {/* // banner start -------------------- */}
    <section>
        <div className="abc">
            <p className="about-fade-photos">Gallery</p>
            <p className="about-banner-text-photos">Videos</p>
        </div>
    </section>
    {/* //  banner end ---------------------   */}


    {/* //  gallery start ---------------------   */}

    <div className="gallery">
        <h1>Videos</h1>
    </div>
    {/* //  videos section start ---------------------   */}
    <div className="sunny">
        <div className="job">
            <div className="vcard">
                <video src={springroll} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Spring Roll</h5>
                    <p className="card-text">Spring rolls are a popular Chinese snack of crispy rolls filled with a savory
                        mixed vegetables stuffing. Hot handheld pockets of spiced veggies are wrapped and deep fried for
                        an endlessly adaptable and delightfully dippable snack. This yummy recipe for crispy vegan Veg
                        Spring Rolls can be made with whatever veggies you have on hand.The lines on spring rolls are
                        created by the rice paper wrapper used to encase the filling.
                    </p>
                </div>
            </div>
            <div className="vcard">
                <video src={pannermakhni} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Paneer Makhni Burger</h5>
                    <p className="card-text">The paneer makhni filling is the star of this burger, made up of paneer cubes
                        cooked in a creamy tomato-based sauce with spices like cumin, coriander, and garam masala. The
                        filling is typically thick and slightly chunky, which gives it a nice texture and depth of
                        flavor.This burger is Paneer Makhni Burger is a delicious fusion dish that combines the Indian flavors of
                        paneer makhni with the popular Western fast-food item, the burger.
                    </p>
                </div>
            </div>
        </div>
        <div className=" job">
            <div className="vcard">
                <video src={pannerkathiroll} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Paneer Kathi Roll</h5>
                    <p className="card-text">Paneer kathi roll is a popular Indian street food that consists of a filling of
                        paneer, onions, bell peppers,spices wrapped in a paratha or roti.dish is a delicious
                        and fulfilling snack perfect for anytime hunger pangs.One of the most important
                        components of paneer kathi roll is the paneer itself, which adds a cool contrast to the hot
                        and savory flavors of the dish.The paratha,roti used wrap the
                        filling is important component of the dish.
                    </p>
                </div>
            </div>
            <div className="vcard">
                <video src={milkshek} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Milk Sheks</h5>
                    <p className="card-text">Milkshakes are a popular drink in India, especially during the summer months
                        when the weather can be quite hot and humid. These drinks are typically made with milk, ice
                        cream, and various fruits or flavors to create a refreshing and delicious beverage.
                        Some of the most popular milkshakes in India include mango, strawberry, chocolate, and vanilla.
                        These flavors are blended with milk and ice cream
                        perfect for sipping on a hot day.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="sunny">
        <div className=" job">
            <div className="vcard">
                <video src={ravadosa} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Rava Dosa</h5>
                    <p className="card-text">Rava Dosa is a popular South Indian dish that is loved by people all over the
                        world.
                        It is a type of crepe made from a fermented batter of rice and lentils. One of the unique
                        features of dosa is the lines that are formed on its surface during the cooking process.The
                        lines on a dosa are formed when the batter is spread on a hot griddle or tawa for rawa dosa, ensuring that it
                        is cooked through without burning or becoming overdone.
                    </p>
                </div>
            </div>
            <div className="vcard">
                <video src={garlicbread} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Garlic Bread</h5>
                    <p className="card-text">Garlic bread is a delicious and popular side dish that is often served
                        alongside pasta dishes, soups, salads, and more. It is typically made by slicing a baguette or
                        other type of bread into long, thin slices and then brushing them with a mixture of butter,
                        minced garlic, and herbs. The slices are then toasted until they are golden brown and
                        crispsy.These slices are often served in a neat,making them easy to pick up and enjoy.
                    </p>
                </div>
            </div>
        </div>
        <div className=" job">
            <div className="vcard">
                <video src={periperi} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Peri Peri Panini</h5>
                    <p className="card-text">Peri Peri Panini is a mouth-watering sandwich that is packed with bold flavors
                        and textures. This sandwich is very features tender and juicy grilled chicken breast that is seasoned
                        with spicy peri peri sauce. The peri peri is fiery African sauce made with chili
                        peppers, lemon juice, garlic, and various herbs and spices. It is a popular sauce that adds a
                        punch of heat and flavor to many dishes, lightly brushed with olive oil and grilled to
                        perfection.
                    </p>
                </div>
            </div>
            <div className="vcard">
                <video src={desserts} className="card-video" controls></video>
                <div className="card-body">
                    <h5 className="card-title">Desserts</h5>
                    <p className="card-text">India is a country that is well-known for its vibrant and diverse culture,
                        which extends to its cuisine as well. One of the most beloved aspects of Indian cuisine is its
                        desserts, which are as varied and rich as the country itself.
                        These are just a few of the many lines of desserts that India has to offer. Each dessert is
                        unique in its flavors, textures, and ingredients, and is a testament to the rich cultural
                        heritage of India.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* //  video section  end ---------------------   */}

    {/* //  gallery end ---------------------   */}

    {/* //  Back to top start ---------------------   */}
    </div>
    </>

  )
}
export default Videos;
import React from "react";
import about from "/src/assets/about.jpg";




const About=()=>{
    return(
<div id="about" className="container py-5 my-5">
    <div className="row align-items-center g-5">
        <div  className="col-md-6">
            <div className="position-relative">
                <img src={about} alt="" className=" img-fluid rounded-4 shadow-lg" />

            </div>

        </div>
        <div className="col-md-6">
            <span className="text text-success fw-bold text-uppercase ">Our Story</span>
<h2>We Breathe Life Into <br />Every Single Bloom</h2>
<p className="para text-muted lh-lg mb-4">Born out of a passion for nature's finest creations, our shop has been connecting people through the timeless language of flowers. Every bouquet we design is a unique masterpiece, combining vibrant colors and fresh scents to create a lasting impression. We are proud to be a part of your beautiful journeys, spreading joy one bloom at a time</p> 
<div  className="details row g-3 mt-2">
    <div className="col-sm-6">
        <div className="d-flex align-item-center gap-2" >
<span className="text-success fs-4">🌸</span>
<span className="fw-semibold text-secondary">Direct From Garden</span>
        </div>

    </div>
<div className="col-sm-6">
              <div className="d-flex align-items-center gap-2">
                <span className="text-success fs-4">🚜</span>
                <span className="fw-semibold text-secondary">Eco-Friendly Transport</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center gap-2">
                <span className="text-success fs-4">🚚</span>
                <span className="fw-semibold text-secondary">Same Day Delivery</span>
              </div>
            </div>
</div>
        </div>

    </div>

</div>
    )
}
export default About;
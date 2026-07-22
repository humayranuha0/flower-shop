import React from "react";
import flower from "/src/assets/flower.jpg"

function Hero(){
return(
    <div id="home" data-aos="fade-up" className="hero-section">
        <div className="container-fluid px-5">

<h1 className="text-dark fw-bold display-4">Bring Nature Into Your Home</h1>
<p className="text-dark fs-5 mt-3">
  Bring nature's finest colors into your home. Experience the joy of fresh flowers delivered straight to your doorstep.
</p>
<button className="btn btn-success btn-lg px-4 py-2 rounded-pill fw-semibold mt-3">
  Order Now
</button>
    </div>
    </div>
)



}
export default Hero;
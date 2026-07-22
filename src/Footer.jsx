import React from "react";
function  Footer(){
return(
    
    <div id="footer">
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
  <div className="container">

    <div className="row g-4">
      
      
      <div className="col-md-4">
        <h4 className="fw-bold text-success mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          FlowerShop
        </h4>
        <p className="text-success smalllh-lg">
          Breathtaking floral arrangements crafted with love and delivered fresh from our gardens straight to your doorstep. Make every moment extraordinary.
        </p>
      </div>


      <div className="col-md-4 text-md-center">
        <h5 className="fw-bold mb-3">Quick Links</h5>
        <ul className="list-unstyled text-success small">
          <li className="mb-2"><a href="#home" className="text-decoration-none text-success text-muted hover-link">Home</a></li>
          <li className="mb-2"><a href="#products" className="text-decoration-none text-success hover-link">Trending Flowers</a></li>
          <li className="mb-2"><a href="#about" className="text-decoration-none text-success hover-link">About Us</a></li>
          <li className="mb-2"><a href="#reviews" className="text-decoration-none text-success hover-link">Testimonials</a></li>
        </ul>
      </div>

  
      <div className="col-md-4">
        <h5 className="fw-bold mb-3 text-warning">Contact Us</h5>
        <ul className="list-unstyled text-success small">
          <li className="mb-2">📍 123 FlowerHub, Bangladesh</li>
          <li className="mb-2">📞 +880 1234-567890</li>
          <li className="mb-2">✉️ FlowerHub</li>
        </ul>
      </div>

    </div> 

    <hr className="text-success my-4" />

  
    <div className="row align-items-center">
      <div className="col-md-12 text-center">
        <p className="text-success small mb-0">
          &copy; {new Date().getFullYear()} FlowerShop. All rights reserved. Developed by Nuha.
        </p>
      </div>
    </div>

  </div>
</footer>
    </div>
)





}
export default Footer;

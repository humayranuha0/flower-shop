import React,{useState} from "react";



function Navbar({cart,setView}){
  
return( 
   <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
  <div className="container" data-aos="fade-up">
   
    <a className="navbar-brand fw-bold text-success fs-3" href="#home" data-aos="fade-up">
      FlowerHub
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
   
      <ul className="navbar-nav ms-auto d-flex flex-row align-items-center gap-4 mb-0">
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#collection">Collection</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#footer">Contact</a>
        </li>
       
        <li className="nav-item">
         <button 
  className="nav-link btn position-relative"
  data-bs-toggle="modal" 
  data-bs-target="#cartModal"
>
  🛒 Cart <span className="badge bg-success ms-1">{cart.reduce((total, item) => total + (item.quantity || 1), 0)}</span>
</button>
          <button className="btn btn-success rounded-pill px-4 py-2 fw-semibold" onClick={() => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}>
            Shop Now
          </button>
          <button onClick={() => setView('admin')} className="btn btn-outline-danger ms-2">
  Admin
</button>
        </li>
      </ul>
    </div>
  
  </div>
</nav>
)




}
export default Navbar;
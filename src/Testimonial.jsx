import React from "react";

function Testimonial(){
return(
<div id="review" className="container py-5" data-aos="fade-up">
  
  <div className="text-center mb-5">
    <span className="text-success fw-bold text-uppercase">Testimonials</span>
    <h2 className="fw-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
      What Our Customers Say
    </h2>
  </div>

 
  <div className="row g-4 justify-content-center">
    
    
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-sm p-4 text-center align-items-center">
       
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
          alt="Zarah Rahman" 
          className="rounded-circle img-fluid mb-3" 
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
       
        <h5 className="fw-bold mb-1">Zarah Rahman</h5>
        
       
        <p className="text-muted small my-3" style={{ maxWidth: "260px" }}>
          "I ordered the Red Rose Bouquet for my best friend's birthday, and she was absolutely thrilled! The flowers were incredibly fresh, beautifully arranged, and delivered exactly on time. Exceptional service!"
        </p>
        
        
        <div className="text-warning mt-auto">⭐⭐⭐⭐⭐</div>
      </div>
    </div>

    
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-sm p-4 text-center align-items-center">
        
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOhm9uF55BvNQ-xIItoM3B_4Fz0zJC6GvjVbpdu0DYw&s=10" 
          alt="Rihad Ahmed" 
          className="rounded-circle img-fluid mb-3" 
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      
        <h5 className="fw-bold mb-1">Rihad Ahmed</h5>
        
        
        <p className="text-muted small my-3" style={{ maxWidth: "260px" }}>
          "I'm always skeptical about ordering flowers online because of freshness, but the White Lilly collection exceeded all my expectations. The fragrance filled the entire room. 10/10 service!"
        </p>
      
        <div className="text-warning mt-auto">⭐⭐⭐⭐⭐</div>
      </div>
    </div>

    
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-sm p-4 text-center align-items-center">
        
        <img 
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
          alt="Brity Rahman" 
          className="rounded-circle img-fluid mb-3" 
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
       
        <h5 className="fw-bold mb-1">Brity Rahman</h5>
        
        
        <p className="text-muted small my-3" style={{ maxWidth: "260px" }}>
          "The handpicked quality of these flowers is genuinely premium. Their same-day delivery option is a complete life-saver for last-minute gift planning. Highly recommended!"
        </p>
        
       
        <div className="text-warning mt-auto">⭐⭐⭐⭐⭐</div>
      </div>
    </div>

  </div> 
</div>
)


}
export default Testimonial;
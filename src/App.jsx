import React,{useState} from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import Collections from "./Collections";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FlowerForm from "./FlowerForm"; 
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";



 

function App(){
 useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

 const [flowers, setFlowers] = useState([]);
 const [cart,setCart]=useState([]);
 const[isCheckOut,setIsCheckOut]=useState(false);
 const [formData,setFormData]=useState({
  name:"",
  number:"",
  address:""
 });
 
const addToCart = (flower) => {
  setCart((prevCart) => {
    
    const exists = prevCart.find((item) => item._id === flower._id);

    if (exists) {
      return prevCart.map((item) =>
        item._id === flower._id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...flower, quantity: 1 }];
    }
  });
};
 const handleChange=(event)=>{
  const{name,value}=event.target;
  setFormData((prevData)=>({
    ...prevData,
    [name]:value
  }));

 }
 const handleConfirmOrder=()=>{
if(!formData.name|| !formData.number || !formData.address){
alert("Please fill in the gap");
return;
}


    const finalOrder={
      customer:formData,
      items:cart
     
     
     
    };
    
   
fetch("http://localhost:3000/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(finalOrder)
})
.then(res => res.json())
.then(data => {
  
  alert("your order is confirmed!");
  setIsCheckOut(false);
  setCart([]);
})
.catch(err => console.error("error", err));
    
};



const [view, setView] = useState('home');

 
  
  const [isAdmin, setIsAdmin] = useState(
    !!localStorage.getItem('adminToken')
  );

  return (
    <div>
  <Navbar cart={cart} setView={setView}/>
  {view ==='admin' ? (
    isAdmin ? (
    <AdminDashboard setView={setView} setIsAdmin={setIsAdmin}/>
  ):(
    <Login setView={setView} setIsAdmin={setIsAdmin}/>
  ) ):(
    <>
  <Hero/>
  {isAdmin && <FlowerForm onFlowerAdd={(newFlower) => setFlowers([...flowers, newFlower])}/>}
  <Collections flowers={flowers} setFlowers={setFlowers} cart={cart} setCart={setCart} addToCart={addToCart} isAdmin={isAdmin}/>
  
  <About/>
  <Testimonial/>
  </>
  )}
  <Footer/>
<div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    { !isCheckOut ? (
    <div className="modal-content">
      
      
 
      <div className="modal-header">
        <h5 className="modal-title fw-bold text-success" id="cartModalLabel">Your Shopping Cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
     
      <div className="modal-body text-dark">
      
        {cart.length === 0 ? (
          <p className="text-center text-muted my-3">Your cart is empty!</p>
        ) : (
         
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-bold">{item.name}</span>
                {(item.quantity || 1) > 1 && (
            <span className="badge bg-secondary">x{item.quantity}</span>
          )}
               <span className="text-success fw-semibold">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        
       
      <div className="d-flex justify-content-between border-top pt-2 fw-bold fs-5">
  <span>Total:</span>
  <span className="text-success">
    ${cart.reduce((total, item) => {
     
      const priceNum = typeof item.price === 'string' 
        ? Number(item.price.replace(/[^0-9.]/g, '')) 
        : Number(item.price || 0);
      return total + (priceNum * (item.quantity || 1));
    }, 0).toFixed(2)}
  </span>
</div>
      </div>
      
  
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
        {cart.length >0 && (
           <button type="button" className="btn btn-success btn-sm" onClick={() =>setIsCheckOut(true)}>
         
            Checkout</button>
          )}
        
      </div>
        

    </div>
    ) : (
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title fw-bold text-success">Checkout Form</h5>
      <button type="button" className="btn-close" onClick={() => setIsCheckOut(false)}></button>
    </div>
    <div className="modal-body text-dark">
      <div className="mb-3">
      <input type="text" value={formData.name} name="name" className="form-control" onChange={handleChange} placeholder="Enter your name"/>
      </div>
      <div className="mb-3">
      <input type="number" value={formData.number}  name="number" className="form-control" onChange={handleChange} placeholder="Enter your phone" />
      </div>
      <div className="mb-3">
      <textarea type="text"  value={formData.address} name="address" className="form-control" onChange={handleChange} placeholder="Enter your full address"/>
      </div>
     
      
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary btn-sm" onClick={() => setIsCheckOut(false)}>Back</button>
      <button type="button" className="btn btn-success btn-sm" onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  </div>
)}
  </div>
</div>
  </div>
      

  )
}

export default App;
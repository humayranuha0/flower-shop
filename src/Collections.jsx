import React,{useState,useEffect} from "react";
import flower1 from "/src/assets/flower2.jpg"
import flower2 from "/src/assets/flower3.jpg"
import flower3 from "/src/assets/flower4.jpg"
import flower4 from "/src/assets/flower5.jpg"
import flower6 from "/src/assets/flower6.jpg"
import flower7 from "/src/assets/flower7.jpg"
const imageMap = {
  "flower1": flower1,
  "flower2": flower2,
  "flower3": flower3,
  "flower4": flower4
};



function Collections({flowers, setFlowers, cart, setCart,addToCart,isAdmin}){

const handleDelete=async(id)=>{
if(window.confirm("Are you sure about delete this card"))
  try{
const response=await fetch(`http://localhost:3000/api/flowers/${id}`,{
  method:"DELETE"
});
if(response.ok){
  alert("flower deleted successfully");
  setFlowers(flowers.filter(flower =>flower._id !== id))
}else{
  alert("something went wrong!");
}
}
catch(err){
console.log(err);
}
};



useEffect(() => {
  fetch('/api/flowers')
    .then(res => res.json())
    .then(data => setFlowers(data))
    .catch(err => console.error("Something went wrong:", err));
}, [setFlowers]);
return(
    <div className="product container py-5" id="collection" data-aos="fade-up">
        <h1 className="heading-line fw-fluid text-success text-center mb-5" >Trending Flowers</h1>
        <div className="row g-4">
          {flowers.map((flowerItem)=>(
            <div className="col-md-4" key={flowerItem._id}>
             <div className="card h-60 shadow-sm">
    <img src={imageMap[flowerItem.img]} className="card-img-top" alt="Flower" />
    <div className="card-body text-center">
      <h5 className="card-title fw-bold">{flowerItem.name}</h5>
      <p className="card-text text-success fw-semibold  text-nowrap">${flowerItem.price.toFixed(2)}</p>
      <button className="btn btn-outline-success rounded-pill btn-sm" onClick={()=>{
    addToCart(flowerItem);
    alert(`${flowerItem.name} added to cart!`);
  }}>Add to Cart</button>
{isAdmin && (
   <button 
  className="btn btn-danger mt-2 ms-2 ml-3" 
  onClick={() => handleDelete(flowerItem._id)}
>
  Delete
</button>
)}
 
    </div>
  </div>
  </div>
         ) )}
        
        
 
</div>
    </div>

        )
}
export default Collections;
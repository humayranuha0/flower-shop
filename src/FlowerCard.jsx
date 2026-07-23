import React,{useState,useEffect} from "react";


const FlowerCard=(()=>{
const [flowers,setFlower]=useState([]);

useEffect(()=>{
    fetch("https://your-backend-api.onrender.com/api/flowers")
    .then(res=>res.json())
    .then(data=>setFlower(data))
    .catch((err)=>console.log(err));
},[]);
return(
    <div className="flower-container">
      <h2>Our Beautiful Flowers</h2>
      
      <div className="flower-grid">
        
        {flowers.map((flower) => (
          <div className="flower-card" key={flower.id}>
           
            <h3>{flower.name}</h3>
            <p>ID: {flower.id}</p>
         </div>
        ))}
      </div>
    </div>
)
});
export default FlowerCard;
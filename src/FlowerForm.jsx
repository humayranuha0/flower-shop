import React,{useState} from "react";


const FlowerForm = ({ onFlowerAdd }) => {
const[name,setName]=useState("");
const[price,setPrice]=useState("");
const[img,setImg]=useState("flower1");

const handleSubmit=(e)=>{
    e.preventDefault();
    const newFlowerData={name,price,img};
    fetch(`${import.meta.env.VITE_API_URL}/api/flowers`,{
        method:"POST",
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify(newFlowerData)
    })
    .then(res=>res.json())
    .then(data=>{
        onFlowerAdd(data);
        setName("");
        setPrice("")
    })
    .catch(err=>console.log(err));
};



  return(
<div className="container my-5" style={{maxwidth:"500px"}}>
    <h3 className="text-center mb-4 fw-bold text-success" >Add a New Flower</h3>
<form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
    <div className="mb-3">
          <label className="form-label fw-bold">Flower Name</label>
          <input type="text" 
          className="form-control"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="e.g., Red Rose, Pink Lily"  required/>
          </div>
         
         
        <div className="mb-3">
          <label className="form-label fw-bold">Price</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="$0.00"
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
          <div className="mb-3">
          <label className="form-label fw-bold">Select Image</label>
          <select className="form-select" value={img} onChange={(e) => setImg(e.target.value)}>
            <option value="flower1">Flower 1 (Red)</option>
            <option value="flower2">Flower 2 (White)</option>
            <option value="flower3">Flower 3 (Pink)</option>
            <option value="flower4">Flower 4 (Yellow)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success w-100 fw-bold">Add Flower</button>
          </div>
</form>
</div>
  )
}

export default FlowerForm;


import React, { useState,useEffect } from "react";



const AdminDashboard=({ setView,setIsAdmin})=>{
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/api/orders`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
        .catch((err)=>console.log(err));
    },[]);
    const handleCompletedOrder=(id)=>{
        fetch(`${import.meta.env.VITE_API_URL}/api/orders/${id}`, {
    method: 'DELETE',
  })
  .then((res)=>res.json())
  .then((data)=>{
    const updateOrders= orders.filter(order=>order._id !== id);
    setOrders(updateOrders);
    
  })
  .catch((err)=>{
    console.log(err)
  },[]);

    }


return(
    <div className="container mt-5" style={{minHeight:'80vh'}}>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h2 className="text-dark fw-bold m-0">🌸 Flower Shop Admin Dashboard</h2>
        <p className="text-center text-muted">Customer list</p>
        <button 
  className="btn btn-danger btn-sm"
  onClick={() => {
    localStorage.removeItem('adminToken');
    setIsAdmin(false);
    setView('home'); 
  }}
>
  Logout
</button>
   <button onClick={() => setView('home')} className="btn btn-secondary">
  ← Back to Home
</button> 
</div>
<div className="card shadow-sm">
    <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Customer Orders</h5>
    </div>
    <div className="card-body  p-0">
        <div className="table-responsive">
            <table className="table table-hover align-middle mb-0 ">
<thead className="table-light">
    <tr>
        <th className="ps-4">No.</th>
        <th>customer name</th>
        <th>contact</th>
        <th>ordered</th>
        <th>total</th>
        <th className="pe-4">Action</th>
    </tr>

</thead>
<tbody>
    {orders.map((order,index)=>(
        <tr key={order.id}>
            <td className="ps-4 fw-bold">{index +1}</td>
            <td className="fw-semibold text-primary">{order.name}</td>
           <td> <div>{order.number}</div>
           <small className="text-muted">{order.address}</small>
           </td>
       <td>
      {order.cardItems && order.cardItems.map((item, idx) => (
        <div key={idx}>
          {item.name} ({item.quantity || 1})
        </div>
      ))}
      </td>
   
           <td className="fw-bold text-success"> <td className="fw-bold text-success">
  {order.cardItems ? order.cardItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0) : 0}
</td></td>
           <td className="pe-4">
           <button className="btn btn-sm btn-outlinr-success me-1" onClick={()=>handleCompletedOrder(order._id)}>Complete</button>
        </td>
        </tr>
    ))}
</tbody>
            </table>
       
        </div>
    </div>
</div>
</div>
)


};
export default AdminDashboard;
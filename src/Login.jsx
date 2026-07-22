import React,{useState} from "react";



const Login=({setView,setIsAdmin})=>{
const [email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[error,setError]=useState('');


const handleLogin =(e)=>{
    e.preventDefault();
    setError('');

fetch("/api/admin/login",{
    method:"POST",
   headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
})
.then((res)=>{
    if(!res.ok){
        throw new Error("Invalid email or password")
    }
    return res.json();
})
.then((data)=>{
    localStorage.setItem("adminToken",data.token);
    setIsAdmin(true);
    setView('admin')
})
.catch((err)=>{
setError(err.message);
});


}
return (
    <div className="container d-flex justify-content-center align-item-center" style={{minHeight:'80vh'}}>
<div className="card p-4 shadow-sm" style={{width:'100%',maxWidth:'400px'}}>
<h3 className="text-center mb-4 text-success fw-bold">🌸 Admin Login</h3>
{error && <div className="alert alert-danger py-2 text-center">{error}</div>}

<form onSubmit={handleLogin}>
    <div className="mb-3">
        <label className="form-label">Email Address</label>
           <input type="email"
           className="form-control"
           placeholder="admin@flowerhub.com"
           value={email} 
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           required/> 
           </div>
           <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password"
            className="form-control" 
            placeholder="*******"
            value={password}
            onChange={(e)=>
                setPassword(e.target.value)
            }
            required/>
           </div>
           <button type="submit" className="btn btn-success w-100 mt-2">Login</button>
            </form>
            </div>
    </div>
);
};
export default Login;
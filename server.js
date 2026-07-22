const dotenv=require("dotenv");
dotenv.config();
const mongoose= require("mongoose");

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//testing change


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected Successfully!"))
  .catch(err => console.log("Error here:", err));


const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname+'/dist'));

const flowerSchema = new mongoose.Schema({
    name:String,
    price:Number,
    img:String
});

const Flower=mongoose.model("Flower",flowerSchema);
const orderSchema = new mongoose.Schema({
    name:String,
    number:Number,
    address:String,
    totalPrice:Number,
    cardItems:[{
        flowerId:mongoose.Schema.Types.ObjectId,
        name:String,
    price:Number,
    quantity:Number}]
});
const Order = mongoose.model("Order",orderSchema);
const adminSchema = new mongoose.Schema({
    email:{ type: String, required: true, unique: true },
    password:{type:String, required:true}
});

const Admin = mongoose.model("Admin",adminSchema);
async function createDefaultAdmin() {
    const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
    const adminExists= await Admin.findOne({email:adminEmail});
    if(!adminExists){
        const hashedPassword= await bcrypt.hash(adminPassword,10);
    const defaultAdmin= new Admin({
        email:adminEmail,
        password:hashedPassword
    });
    await defaultAdmin.save();
    
   console.log("Default Admin created successfully!");
}
    
}
createDefaultAdmin();



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});



app.get("/api/flowers",async(req,res)=>{
    
   try{
    const allFlower=await Flower.find();
     res.status(201).json(allFlower);
   }
   catch(err){
    res.status(500).json({ error: err.message });
   }

});

app.post("/api/flowers",async(req,res)=>{
    try{

    
  
  const newFlower= new Flower({
    
     name: req.body.name,
    price: req.body.price,
    img: req.body.img  
  });
  newFlower.save();
  res.status(201).json(newFlower);
}
 catch (err){
res.status(500).json({ error: err.message });
 }
  
});
app.delete("/api/flowers/:id",async(req,res)=>{
    try{
    const{id}=req.params;
    const deleteFlower=await Flower.findByIdAndDelete(id);
    if(!deleteFlower){
        return res.status(404).json({ message: "Flower not found!" });
    }
    res.status(200).json({ message: "Flower deleted successfully!", deleteFlower });
    }
    catch(err){
res.status(500).json({ error: err.message });
    }


});
app.post("/api/orders",async(req,res)=>{
   try{
     const newOrder= new Order({
        name:req.body.customer.name,
        number:req.body.customer.number,
        address:req.body.customer.address,
       totalPrice:req.body.totalPrice,
       cardItems: req.body.items



   

    });
   await newOrder.save();
     res.status(201).json(newOrder);


}
catch(err){
    console.log(err);
}
});
app.get("/api/orders",async(req,res)=>{
   const orders=await Order.find();
   res.json(orders);
}); 
app.delete("/api/orders/:id",async(req,res)=>{
    try{
const orderId = req.params.id;

const deleteOrder= await Order.findByIdAndDelete(orderId);
if(!deleteOrder){
    return res.status(404).json({message:"Order not found"});
}
res.json({message:"Order completed and deleted successfully!"});
}
catch(error){
    res.send(error);
}

});
app.post("/api/admin/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        const admin=await Admin.findOne({email});
        if(!admin){
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }
        const isMatch=await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid Email or Password!" });
    
        }
        const token = jwt.sign(
            {id:admin._id},
             process.env.JWT_SECRET, 
            {expiresIn:"1d" }
        );
        res.json({message:"Login successful",token});
    }
    catch(err){
        res.status(500).json({ message: "Server error", error: error.message });
    }
});



app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
});
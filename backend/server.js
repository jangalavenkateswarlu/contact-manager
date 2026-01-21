const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Contact = require("./Contact");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

// Create contact

app.post("/api/contact",async(req,res)=>{
    const contacts = await Contact.create(req.body);
    res.send(contacts);
});

// Get all contacts
app.get("/api/contact", async (req,res) =>{
    const allcontact = await Contact.find();
    res.send(allcontact);
});

//update contact

app.put("/api/contact/:id", async (req,res) =>{
    const contacts  = await Contact.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    });
    res.send(contacts);
});

//delete contact
app.delete("/api/contact/:id", async (req,res) =>{
    await Contact.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted"});
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
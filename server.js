const express = require("express");
//initialisation
const app = express();
app.use(express.json());
const port = 8081;
const toDolist = ["kavya","sowmya","naveena","ruchitha"];

app.get("/todos",(req,res)=>{
        res.status(200).send(toDolist);
})

app.post("/todos",(req,res)=>{
   let newToDoItem = req.body.item;
   toDolist.push(newToDoItem);
   res.status(201).send({
        message: "task was added successfully!"
   })
})

app.delete("/todos",(req,res)=>{
    const itemTodelete = req.body.item;

    toDolist.find((elem,i)=>{
        if(elem == itemTodelete){
            toDolist.splice(i,1)
        }
    })
    res.status(204).send({
        message: "Delete the item"
    })
})
// for put method (if anything is not given)
app.all("/todos",(req,res)=>{
    res.status(501).send({
        message: "sorry not implemented"
    })
})
// other than todos
app.all("*",(req,res)=>{
    res.status(404).send(
        {message: "not found"}
    )
})

app.listen(port,()=>{
    console.log(`Express js server is up and running succesfully on port ${port}`)
})
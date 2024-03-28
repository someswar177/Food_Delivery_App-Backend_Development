const express = require('express');
const app = express();
const cors = require("cors");
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("yes")
})

app.post("/todos",async(req,res)=>{
    try{
        const {description} = req.body;
        // const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)",[description]);
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)",[description]);
        res.json(newTodo);
    }catch(err){
        console.log(err)
    }
})

app.get("/gettodos",async(req,res)=>{
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos)
    }catch(err){
        console.log(err)
    }
})

app.get("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id])
        res.json(todo);
    }catch(err){
        console.log(err)
    }
})

app.put("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description,id]);
        res.json(updateTodo);
    }catch(err){
        console.log(err)
    }
})

app.delete("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
        res.json("Todo was deleted");
    }catch(err){
        console.log(err)
    }
})

app.listen(3000,()=>{
    console.log("Server is listening at \nhttp://localhost:3000");
})
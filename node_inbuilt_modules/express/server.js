const express = require('express')

const courses = [
    {id : 1,name:"Python"},
    {id:2,name:"Javascript"},
    {id:3,name:"Java"},
    {id:4,name:"React"}
]
const app = express()


//Get method

app.get('/', (req,res)=> {  // ('/') localhost path
    res.send("Hello Express12345")
})
app.get ('/about',(req,res) => {
    res.send("About the server")
}) 
app.get('/contact',(req,res) => {
    res.send("abcd@gmail.com")
})
app.get('/courses',(req,res)=> {
    res.send(courses)
})

//route params

app.get('/courses/:id/:name',(req,res)=> {
  res.send(courses)
})

app.get('/courses/:id',(req,res)=> {
    console.log(req.params);
    let course = courses.find((course) => course.id === parseInt(req.params.id))
    res.send(course)
})

//Post method

app.listen(8080 , () => {
    console.log("server started")
})  // set port number
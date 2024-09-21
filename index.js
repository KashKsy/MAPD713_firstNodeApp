import express from 'express'

//create an instance of express
const expressApp = express()

//interceptor for post requests
expressApp.use(express.json())
//specify port number where you will run your app
const port = 3000;

expressApp.get('/hello',(req,res) => {

    res.json({"Key":"Hello World"})
})

expressApp.get('/first',(req,res) => {

    res.json({"Key":"You have hit the first endpoint"})
})
expressApp.get('/second',(req,res) => {

    res.json({"Key":"You have hit the second endpoint"})
})
expressApp.get('/third',(req,res) => {

    res.json({"Key":"You have hit the third endpoint"})
})

expressApp.post('/postexample',(req,res) => {

    const {fname, lname} = req.body
    console.log(fname)
    res.send(fname)
  
})

expressApp.get('/queryexample', (req,res) => {

let first_name = req.query.fname
let last_name = req.query.lname

res.send(`First name is ${first_name} and last name is ${last_name}`)

})

expressApp.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
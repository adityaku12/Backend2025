require('dotenv').config()
const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
    res.send('Good Bye 2025!')
})

app.get('/Whatsapp', (req,res) => {
    res.send('Thanks for coming..........')
})
 
app.get('/login',(req,res)=> {
    res.send('<h1>Do not send messege without backslash</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>Chai aur code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



// Rendor->Perfect for: Beginner Node.js/Express apps ,
// Railway->Perfect for: Small projects / college assignments,
// Vercal->Note: Node backend fully persistent nahi, sirf serverless functions ke liye,
// Netify->Note: Full Express backend nahi chal sakta; serverless functions use karne padte hain,
// Heroku->Recommendation: Beginners ke liye ab Render/Railway better hai
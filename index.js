require('dotenv').config()
const express = require('express')
const app = express()
const port = 5001

const githubData ={
    
  "login": "adityaku12",
  "id": 159567474,
  "node_id": "U_kgDOCYLOcg",
  "avatar_url": "https://avatars.githubusercontent.com/u/159567474?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/adityaku12",
  "html_url": "https://github.com/adityaku12",
  "followers_url": "https://api.github.com/users/adityaku12/followers",
  "following_url": "https://api.github.com/users/adityaku12/following{/other_user}",
  "gists_url": "https://api.github.com/users/adityaku12/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/adityaku12/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/adityaku12/subscriptions",
  "organizations_url": "https://api.github.com/users/adityaku12/orgs",
  "repos_url": "https://api.github.com/users/adityaku12/repos",
  "events_url": "https://api.github.com/users/adityaku12/events{/privacy}",
  "received_events_url": "https://api.github.com/users/adityaku12/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aditya kumar ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "An enthusiastic fresher who is a self-starter and capable to use technical skills for the betterment of the organization . ",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2024-02-09T16:58:12Z",
  "updated_at": "2026-01-03T02:05:26Z"
}
     
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

app.get('/github',(req,res) =>{
      res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



// Rendor->Perfect for: Beginner Node.js/Express apps ,
// Railway->Perfect for: Small projects / college assignments,
// Vercal->Note: Node backend fully persistent nahi, sirf serverless functions ke liye,
// Netify->Note: Full Express backend nahi chal sakta; serverless functions use karne padte hain,
// Heroku->Recommendation: Beginners ke liye ab Render/Railway better hai
import express from "express";

const app = express();
const port = 8000;
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(request,response)=>{
    response.render('index');
});

app.get("/login",(request,response)=>{
   response.render('login.ejs');
});

app.get("/register", (request,response)=>{
    response.render('signup.ejs');
});

app.listen(port,()=>{
   console.log(`Serveur http://localhost:${port} en cours`);
});
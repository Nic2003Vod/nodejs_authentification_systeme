import express from "express";
import mysql from "mysql";

//Configuration de la base de donnée
const con = mysql.createConnection({
    host:"localhost",
    user:"nico",
    password:"nico2003",
    database:"sili"
});
//connexion à la base de donnée
con.connect((error)=>{
    if (error){
        console.log(`Erreur lors de la connexion à la base de donnée: ${error}`);
        return ;
    }
    console.log("Connexion à la base de donnée réussi !");
});
const app = express();
const port = 8000;
app.set('view engine','ejs');
app.use(express.static('public'));

//Affichage de la page d'accueil
app.get("/",(request,response)=>{
    response.render('index');
});
//Affichage de la page de connexion
app.get("/login",(request,response)=>{
   response.render('login.ejs');
});
//Affichage de la page d'inscription
app.get("/register", (request,response)=>{
    response.render('signup.ejs');
});

//Traitement du formulaire d'inscription

app.listen(port,()=>{
   console.log(`Serveur http://localhost:${port} en cours`);
});
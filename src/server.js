const express = require("express");
const cors = require("cors");            
const app = express();
const connect = require("./configs/db"); //configs contain database connection file


app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/view');
app.use(express.urlencoded({ extended: false }))

app.get("/", function (req, res) {
    res.render("home");
});
 
// Showing register form
app.get("/register", function (req, res) {
    res.render("register");
   
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/logout", function (req, res) {
    
    res.redirect("/");
});

app.use('/', require('./controllers/auth'));                      
app.use("/", require("./controllers/generateShortUrl"));



//assigning port to listen
app.listen(5000, async()=>{
    try{
        await connect();
        console.log("lsitening on port 5000");
    }catch(err){
        console.log(err.message)
    }
})
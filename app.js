const express = require('express')
const hbs = require('hbs');
require("dotenv").config();

const app = express()
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get('/',  (req, res) => {
    res.render("home", {
        nombre : "Ronald Gallardo",
        title: "Curso de Node"
    })
})

app.get('/generic',  (req, res) => {
    res.render("generic", {
        nombre : "Ronald Gallardo",
        title: "Curso de Node Generico"
    })
})

app.get('/elements',  (req, res) => {
    res.render("elements", {
        nombre : "Ronald Gallardo",
        title: "Curso de Node Elementos"
    })
})


app.get('*',  (req, res) => {
    res.send('404 | Page Not found')
})

app.listen(port)
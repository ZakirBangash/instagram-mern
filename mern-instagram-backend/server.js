import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pusher from 'pusher'
import dbModel from './dbModel.js'
import { AppsSharp } from "@material-ui/icons";

// app config
const app = express();
const port = process.env.PORT || 8000;
const connectionURL = `mongodb+srv://admin:FpLzDHbtdTuGCdJu@cluster0.hffm2.mongodb.net/instagram?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(cors());

// db config
mongoose.connect(connectionURL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// for checking that database is connected or not
mongoose.connection.once('open', () => {
    console.log('Database is connected')
})


// api endpoints
app.get("/", (req, res) => res.status(200).send("Hello world"));



app.post('/upload', (req, res) => {
    const body = req.body;
    dbModel.create(body , (err,data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.get('/sync', (req, res) =>{
    dbModel.find((err,data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})



// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));

// FpLzDHbtdTuGCdJu

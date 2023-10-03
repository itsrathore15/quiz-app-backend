import express  from "express";
import morgan from "morgan"; //whenever we make a request from this server,we get that request inside console by using morgan library
import cors from 'cors'; //cors is used for cross domain data-sharing
import { config } from "dotenv"; //The dotenv package is commonly used for managing environment variables in Node.js applications

const app=express();

/***app middlewares */ 
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json()); //informing express that we are using json format
config(); //used to load environment variables from a .env file into the Node.js runtime environment

/*application port*/
const port=process.env.PORT || 8080;

//Routes
app.get('/',(req,res)=>{
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(port,()=>{
    console.log(`Server connected to http://localhost:${port}`)
})
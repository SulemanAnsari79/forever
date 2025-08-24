import { Collection, MongoClient } from "mongodb";
import mongoose from "mongoose";

const connectdb=async ()=>{
    
    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
    })
    
    await mongoose.connect(process.env.MONGODB_URI)



    //local connection
    // const client= new MongoClient('mongodb://localhost:27017')
    // const dbName='LocalForever'
    // try {
    //     await client.connect();
    //     console.log('MongoDb Connected');
    // } catch (error) {
    // console.log(error)
    // }
}

export default connectdb;
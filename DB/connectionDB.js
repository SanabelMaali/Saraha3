
import mongoose from 'mongoose';
 const connectionDB=async()=>{
    return await mongoose.connect(process.env.DB_LOCAL)
    .then(()=>{
     console.log("connect to DB")
    }).catch((error)=>{
        console.log(`error to connectDB ${error}`)
    })
}
export default connectionDB;
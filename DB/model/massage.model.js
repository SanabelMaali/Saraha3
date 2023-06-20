import mongoose , { Schema, Types, model } from 'mongoose';
const massageSchema=new Schema({
    massage:{
        type:String,
       required:true,
    },
   
    reciverId:{
        type:Types.ObjectId,
        required:true,
    },
   },
   {
    timestamps:true,
   })
   const massageModel=mongoose.models.Massage || model('Massage',massageSchema)
   export default massageModel;


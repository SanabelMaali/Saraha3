import massageModel from "../../../../DB/model/massage.model.js";
import userModel from "../../../../DB/model/user.model.js";

export const getMassage= async(req,res)=>{
   const messageList= await massageModel.find({reciverId:req.id})
   return res.json({message:"success",messageList})
}

export const sendMessages=async(req,res)=>{
    const {reciverId}=req.params;
    const {massage}=req.body ;
    const user= await userModel.findById(reciverId)//بتأكد اذا اليوزر صاحب recivedid موجود او لا
    if(!user){
        return res.status(404).json({message:"invalid account id"})
    }
   const createMassage= massageModel.create({reciverId,massage})
   return res.json({message:"success"})
   
}

export const deleteMassage=async (req,res)=>{
    const id=req.id
    const {massageId}=req.params;
    const massage=await massageModel.deleteOne({_id:massageId,reciverId:id});
    if(massage.deletedCount==0){
        return res.status(404).json({massage:"invalid massage id or user id"})
    }
    return res.json({massage:"success"})
}








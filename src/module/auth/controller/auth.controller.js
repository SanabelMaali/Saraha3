import userModel from "../../../../DB/model/user.model.js"
import { hash ,compare} from "../../../../Services/HashAndCompare.js";
import { generatToken, verifyToken } from "../../../../Services/generateAndverifyToken.js";
import { sendEmail } from "../../../../Services/sendEmail.js";
import { signInSchema, signUpSchema } from "../auth.validation.js";
export const signUp=async (req,res)=>{

 
  const {userName,password,email}=req.body;
  const validationResult=signUpSchema.body.validate(req.body,{abortEarly:false})
  if(validationResult.error)
  return res.json(validationResult) 
  
        const user= await userModel.findOne({email}) 
        if(user){
          return res.status(409).json({massage:"email already  exist"})
        }
        const hashPassword=hash (password);
        const token=generatToken({email},process.env.Email_token)
        const link=`http://localhost:3000/auth/confirmEmail/${token}`;
        await sendEmail(email,'confirm your email',`<a href="${link}" >Verify Email</a>`);

        const createUser= await userModel.create({userName,email,password:hashPassword})
        return res.status(201).json({massage:"Done" ,user:createUser._id})

}
export const confirmEmail=async(req,res)=>{
  const {token}=req.params;
  const decoded=verifyToken(token,process.env.Email_token);//اناكد منها وفك تشفيرها
  const user= await userModel.updateOne({email:decoded.email},{confirmEmail:true})//بدي اعدل اليوزر من حلال ايميله واعمل خاتة الكونفيرم ايميل فيمتها ترو 
  return res.redirect('https://www.facebook.com')//بس اعمل فيريغاي للايميل بنقلني عصفحة الفيس
}

export const signIn=async(req,res)=>{
  
    const validationResult=signInSchema.body.validate(req.body,{abortEarly:false})
    if(validationResult.error){
      return res.json(validationResult);
    }
    const {email,password}=req.body;
      
  const user= await userModel.findOne({email});
  
  if(!user){
      return res.json({massage:"email not exists"})
  }else{
   if(!user.confirmEmail){
    return res.json({massage:"plz virify your email"})
   }
   
    const match=compare(password,user.password)
  if(!match){
      return res.json({massage:"invalid password"})
  }

  const token=generatToken({id:user._id})
  return res.json({massage:"Done",token})
  }
  
}
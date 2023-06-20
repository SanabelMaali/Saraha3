
import userModel from "../../DB/model/user.model.js";
import { verifyToken } from "../../Services/generateAndverifyToken.js";

export const auth=async (req,res,next)=>{

    const {authorization}=req.headers;

    if(!authorization?.startsWith(process.env.BEARERKEY))
    {
        return res.json({massage:"invalid bearer key"})
}
const token=authorization.split(process.env.BEARERKEY)[1]// للتأكيد بيني وبين الفرونت اند يعني رجع التوكن صح


if(!token)
{
    return res.json({massage:"invalid token"})
}

const decoded=verifyToken(token)//لفك التشفير

const authUser=await userModel.findById(decoded.id).select("userName email")//الهدف انه في حال اليوزر تسكر حسابه وكان عندي ساعة مثلا بتكون التوكسن متاحة فيها وما نحذفت هو بقدر يرجع يدخل عحسابه مشان هيك انا بمنعه انه يدخل
if(!authUser)
return res.status(401).json({massage:"not registered account"})

req.id=decoded.id;

next();

    
}
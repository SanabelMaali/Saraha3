import multer from "multer";
import { nanoid } from "nanoid";

export const HME=(err,req,res,next)=>{    //بكتشف الاخطاء لو الصور مش من الانواع المحدده 
if(err)
return res.status(400).json({massage:"multer err",err})
}


function fileUpload(){
    const storage=multer.diskStorage({}) //لانه استخدمت ال cloudinary
      

    function fileFilter(req,file,cb){
        if(['image/jpeg','image/png','image/gif'].includes(file.mimetype)){
        cb(null,true);
        }
    else{
        cb("invalid format",false)
    }
    }
    const upload=multer({fileFilter, storage})
    return upload;
}
export default fileUpload
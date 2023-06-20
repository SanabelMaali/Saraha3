export const asyncHandler=(fn)=>{ //بديل ال try_catch
    return (req,res)=>{
        fn(req,res).catch(error=>{
            return res.json({massage:"catch error",error:error.stack})
        })
    }
    
}
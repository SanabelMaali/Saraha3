import jwt from 'jsonwebtoken'

export const generatToken=(payload,signiture=process.env.signitureToken,expiresIn='3h')=>{
    const token=jwt.sign(payload,signiture,{expiresIn})
    return token
}//named paramter اسمها


export const verifyToken=(token,signiture=process.env.signitureToken)=>{
    const decoded=jwt.verify(token,signiture)
    return decoded
}



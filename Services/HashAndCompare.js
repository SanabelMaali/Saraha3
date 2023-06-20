import bcrypt from 'bcrypt';


export const hash= (plainText,saltRound=parseInt(process.env.saltRound))=>{
    let hashvalue=bcrypt.hashSync(plainText,saltRound);
    return hashvalue;
} 


export const compare=(password,hashvalue)=>{
    let match=bcrypt.compareSync(password,hashvalue)
    return match;

}
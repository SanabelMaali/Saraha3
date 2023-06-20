
const dataMethods=['body','query','params']
const validation= (schema)=>{

    return (req,res,next)=>{
        const ValidationArray=[]; //بخزن فيها كل الايرورز
        dataMethods.forEach(key=>{
            if(schema[key]){
                const validationResult= schema[key].validate(req[key],{abortEarly:false})
                
                if(validationResult.error){
                    ValidationArray.push(validationResult.error.details)
                }
            }
        }) //لف عليهم
       
        if(ValidationArray.length >0){
            return res.json({massage:"validationError",ValidationArray});
        }
        else{
            next();
        }
    }
}

export default validation
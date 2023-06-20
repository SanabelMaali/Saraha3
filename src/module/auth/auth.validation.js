import joi from 'joi'

export const signUpSchema={
    body:joi.object({
        userName:joi.string().alphanum().min(3).max(20).required().messages({
            'any.required':'userName is required',
            'string.empty':'userName is required'
        }),
        email:joi.string().email({maxDomainSegments:2,tlds:{allow:['com']}}).required(),
        password:joi.string().required(),
        confirmPassword:joi.string().valid(joi.ref('password')).required(),
        age:joi.number().integer().min(20).required()
    }).required(),

    query:joi.object({
         test:joi.boolean().required()
    }).required()
}

export const signInSchema={
    body:joi.object({
        email:joi.string().email().required(),
        password:joi.string().required(),
    
    }).required()
}
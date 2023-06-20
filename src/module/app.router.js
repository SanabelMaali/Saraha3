import authRouter from './auth/auth.router.js'
import massageRouter from './massage/massage.router.js'
import userRouter from './user/user.router.js'
import connectionDB from '../../DB/connectionDB.js';


const initApp=(app,express)=>{
    
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.send({massage:"Hello...!"})
    })
    app.use('/auth',authRouter)
    app.use('/massage',massageRouter)
    app.use('/user',userRouter)
    app.use('/*',(req,res)=>{
        return res.json({massage:"page not found"})
    })
}


export  default initApp ;

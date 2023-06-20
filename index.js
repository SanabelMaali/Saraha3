import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import initApp from './src/module/app.router.js'
import connectionDB from './DB/connectionDB.js'

const app = express()
const port = 3000;

initApp(app,express);
//sendEmail()//بشتغل اول ما افتح المشروع
// في حال بديش ايااه يشتغل اول ما افتح التطبيق بناديه بال signup  او غيره

connectionDB().then(()=>{
    app.listen(process.env.PORT|| port, () => console.log(`Example app listening on port ${port}!`))
})

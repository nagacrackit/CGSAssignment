const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./config/database');
const authentication=require('./routes/authentication');
const path=require('path');


const app=express();
const port=process.env.PORT||8080;

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err) console.log(`could not connect to database`,err);
    else console.log(`Connected to mongodb`);
    //console.log(config.secret);
})


// app.use(express.static(__dirname+'/client/dist'));
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/client/dist/index.html'));
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/authentication',authentication);




app.listen(port,()=>console.log(`server started running on port ${port}`))


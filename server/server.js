const express=require("express");
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require("mysql");
const db=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "keetappbase"
});

// app.get("/",(req,res)=>{
//     // const sqlInsert="insert into users(email,password) values('rahidaliyev18@gmail.com','123456789')"
//     // db.query(sqlInsert,(err,result)=>{
//     //   res.send("Hello Sebish!");
//     // });
    
//     res.send("Hello Sebish!");


// })

// app.get('/users',(req,res)=>{
//     const sqlSelect='select *from users';
//     db.query(sqlSelect,(err,result)=>{
//         res.send(result)
//     })
// })
app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/get',(req,res)=>{
      const sqlSelect="select * from users"
        db.query(sqlSelect,(err,result)=>{
        res.send(result);
      });
})

app.post('/api/insert',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const sqlInsert="insert into users(email,password) values(?,?)"
    db.query(sqlInsert,[email,password],(err,result)=>{
      console.log(result)
    });
})









app.listen(3001,()=>{
    console.log("Running on port localhost:3001");
})
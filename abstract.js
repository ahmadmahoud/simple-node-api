// استدعاء للمكتبة
const express = require('express');
// التعامل مع ملف Router والذي يحتوي على ال request
const myRouter = require('./route/product_router');
// اخذ object من المكتبة
const app = express();
// لقراءة ال body من post في عمليات request
const bodyParser = require('body-parser');
// لربط التطبيق بقاعدة بيانات
const mongoose = require('mongoose');
// المكتبة المخصصه لتهيئة السيرفر للرفع
const cors = require('cors');

// جعل كل عمليات السيرفر تكون باستخدام core .
app.use(cors());

// middelware : bodyParser (قراة البيانات من body السيرفر بشكل مستمر عند تنفيذ اي حدث على السيرفر)
app.use(bodyParser.json());

// middelware : تنفيذ اي عمليه على السيرفر عندما يتم استخدامه
app.use('/product',myRouter);

// ربط تطبيقك مع قاعدة بيانات mongo
mongoose.connect("mongodb+srv://algeneral753:nu0sr5ekhJVofTx7@cluster0.wxdlqpe.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>{
        app.listen(process.env.POTR || 8080 ,()=>{
            console.log("server is running");
            });
    }
);


// const connrection = mongoose.connection;




// connrection.once("open")

// الحصول على بيانات معينه وهيا عباره عن json


// http://www.localhost:8080/product
// post : http://www.localhost:8080/product/post
// get : http://www.localhost:8080/product/get
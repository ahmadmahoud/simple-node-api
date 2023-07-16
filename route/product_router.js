const express = require('express');
const Student = require('../models/mongo_model');
const router = express.Router();

router.get('/get',async (req,res)=>{

    // الحصول على البيانات مع ارجاع قيمة 200 في نجاح العمليه

    // يمكنك استخدام هذه الطريقة او حتى الطريقة الاخرى مع وضع async بالاعلى كما هو موضح
    // Student.find().then((data)=>{
    //     res.status(200).json(data);
    // });


    // هذه طريقة اخرى ايضا .
    const data = await Student.find();
    res.status(200).json(data)

});

// الحذف عن طريق id
router.delete('/:id',async (req,res)=>{
    
    // الحصول على البيانات مع ارجاع قيمة 200 في نجاح العمليه

    // يمكنك استخدام هذه الطريقة او حتى الطريقة الاخرى مع وضع async بالاعلى كما هو موضح
    // Student.find().then((data)=>{
    //     res.status(200).json(data);
    // });


    // هذه طريقة اخرى ايضا .
    const data = await Student.deleteOne({"_id":req.params.id});
    res.status(200).json(data)

    // http://www.localhost:8080/product/find64b0fff88579590e4dfe8452

});

// التعديل عن طريق id
router.patch('/:id',async (req,res)=>{
    
    // الحصول على البيانات مع ارجاع قيمة 200 في نجاح العمليه

    // يمكنك استخدام هذه الطريقة او حتى الطريقة الاخرى مع وضع async بالاعلى كما هو موضح
    // Student.find().then((data)=>{
    //     res.status(200).json(data);
    // });


    // هذه طريقة اخرى ايضا .
    const data = await Student.updateOne({"_id":req.params.id},{"name":req.body.name});
    res.status(200).json(data)

    // http://www.localhost:8080/product/find64b0fff88579590e4dfe8452

});

// البحث عن طريق ال id
router.get('/find:id',async (req,res)=>{
    
    // الحصول على البيانات مع ارجاع قيمة 200 في نجاح العمليه

    // يمكنك استخدام هذه الطريقة او حتى الطريقة الاخرى مع وضع async بالاعلى كما هو موضح
    // Student.find().then((data)=>{
    //     res.status(200).json(data);
    // });


    // هذه طريقة اخرى ايضا .
    const data = await Student.findById(req.params.id);
    res.status(200).json(data)

    // http://www.localhost:8080/product/find64b0fff88579590e4dfe8452

});


router.post('/post',(req,res)=>{

    const student = new Student({
        name:req.body.name,
        age:req.body.age,
    });

    student.save().then((data) => {
        res.json({
            "message":"added to success",
            "data" : data
        });
    });
});

// تصدير الملف حتى يمكن استخدامه في اي مكان
module.exports = router;
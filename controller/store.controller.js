var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../utils/utility');


exports.getStoreList = async (req, res) => {

    try {
        var storeQuary = queries.quaryList.GET_STORE_LIST_QUARY
        var result = await dbConnection.dbQuery(storeQuary)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success get all data from store", data: result.rows }))

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to list store database" })

    }

    
}

 exports.saveStore = async (req , res) => {
 
     try {
     
         var createdBy = "admin";
         var createdOn = new Date();
         // req.body
         var storeName = req.body.storeName;
         var address = req.body.address;
         console.log("storeName : " + storeName   + " ----- address : " + address)
         if(!storeName || !address){
             return res.status(500).send({ error: 'store name and address are required , can not empty' })
         }
         
         let storeCode= util.generateStoreCode();
 
         values =[storeName , address , storeCode , createdOn , createdBy];
         var saveStoreQuery = queries.quaryList.SAVE_STORE_QUERY;
         await dbConnection.dbQuery(saveStoreQuery , values);
         return res.status(201).send("Successfully store created ");
     } catch (err) {
         console.log("Error : " + err);
         return res.status(500).send({error : 'Failed to save store'});
     }
    
 }
 
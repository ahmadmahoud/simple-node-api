const quaries = require('../db/queries');
const dbConnection = require('../db/connection');

exports.getBookList = async (req, res) => {

    try {
        var BookQuary = quaries.quaryList.GET_BOOK_LIST_QUARY
        var result = await dbConnection.dbQuery(BookQuary)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success get all data from book", data: result.rows }))

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to list book database" })

    }
}

exports.getBookDetails = async (req, res) => {

    try {
        var id = req.params.id
        var BookQuary = quaries.quaryList.GET_BOOK_DETAILS_QUARY
        var result = await dbConnection.dbQuery(BookQuary, [id])
        return res.status(200).send(JSON.stringify({ status: 200, message: "success get Details data from book", data: result.rows }))

    } catch (error) {
        return res.status(500).send({ status: 500, message: "faild to list book database" })

    }
}

exports.saveBook = async (req, res) => {
    try {

        var bookTitle = req.body.title
        var bookDescreption = req.body.descreption
        var bookPublisher = req.body.publisher
        var bookAuthor = req.body.author
        var bookPages = req.body.pages
        var storeCode = req.body.storeCode
        var createdOn = new Date();
        var createdBy = "admin"

        if (!bookTitle || !bookPublisher || !bookAuthor || !storeCode) {
            console.log('Error 1')
            return res.status(422).send({ status: 422, message: "book Publisher ,book Author, store Code ,and book Title are require " })
        }

        try {
            console.log('Error 2')
            var storeQuary = quaries.quaryList.GET_STORE_CODE
            var result =  await dbConnection.dbQuery(storeQuary,[storeCode])
     
            if(result.rows.length===0){
                console.log('Error 3')
                return res.status(422).send({ status: 422, message: "sore code not valiade" })
            }
             

        } catch (error) {
            console.log('Error 4')
            return res.status(422).send({ status: 422, message: "faild to get store code from database " })
    
        }
        console.log('Error 5')
        values = [bookTitle, bookDescreption, bookAuthor , bookPublisher, bookPages, storeCode, createdOn, createdBy]
        var addStoreQuary = quaries.quaryList.SAVE_BOOK_QUARY
        await dbConnection.dbQuery(addStoreQuary, values)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success to add book" }))

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to add book database" })

    }



}

exports.updateBook = async (req, res) => {
    try {

        var bookTitle = req.body.title
        var bookDescreption = req.body.descreption
        var bookPublisher = req.body.publisher
        var bookAuthor = req.body.author
        var bookPages = req.body.pages
        var bookId = req.body.bookId
        var storeCode = req.body.storeCode
        var createdOn = new Date();
        var createdBy = "admin"

        if (!bookId||!bookTitle || !bookPublisher || !bookAuthor || !storeCode) {
            return res.status(422).send({ status: 422, message: "book id, book Publisher ,book Author, store Code ,and book Title are require " })

        }

        try {
            var storeQuary = quaries.quaryList.GET_BOOK_ID
            var result =  await dbConnection.dbQuery(storeQuary,[bookId])
     
            if(result.rows.length===0){
                return res.status(422).send({ status: 422, message: "id not valiade" })
            }
    
        } catch (error) {
            return res.status(422).send({ status: 422, message: "faild to get id from database " })
        }

        values = [bookTitle, bookDescreption, bookPublisher, bookAuthor, bookPages, storeCode, createdOn, createdBy,bookId]
        var updateStoreQuary = quaries.quaryList.UPDATE_BOOK_QUARY
        await dbConnection.dbQuery(updateStoreQuary, values)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success to update book" }))

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to update book database" })
    }
}

exports.deleteBook = async (req, res) => {
    try {

        var bookId = req.params.id
        if (!bookId) {
            return res.status(422).send({ status: 422, message: "book id are require " })
        }
        try {
            var storeQuary = quaries.quaryList.GET_BOOK_ID
            var result =  await dbConnection.dbQuery(storeQuary,[bookId])
     
            if(result.rows.length===0){
                return res.status(422).send({ status: 422, message: "id  not valiade" })
            }
             
        } catch (error) {
            console.log(error)
            return res.status(422).send({ status: 422, message: "faild to get id from database " })
        }

        var deleteStoreQuary = quaries.quaryList.DELETE_BOOK_QUARY
        await dbConnection.dbQuery(deleteStoreQuary, [bookId])
        return res.status(200).send(JSON.stringify({ status: 200, message: "success to delete book" }))

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to delete book database" })
    }
}
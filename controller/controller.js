var generator = require('../utils/generator')
var memorystorage = require('../utils/memorystorage')
var model = require('../models/note_model')

exports.getAllNote = (req,res)=> {
    var values = memorystorage.getValus(memorystorage.myStorage);
    if (values.length <= 0) {
        return res.status(505).send("You have no items yet is here");
    }
    console.log("Values ....... " + JSON.stringify(values));
    return res.status(200).send(JSON.stringify(values));
}

exports.sendNote = (req,res)=> {
    var seqId   = generator.generate();
    var createdBy = "admin";
    var createdOn = new Date();

        try{
        var title = req.body.title;
        var content = req.body.content;

            if(!title || !content){
                console.log(req.body);
                console.log(req.body.Date);
                console.log(req.body.Date());
                return res.status(500).send({ error: 'Title and Content should not be empty' })
            }
            
            var Note = model.Note;
            var noteObj = new Note(seqId , title , content , createdBy , createdOn);
            memorystorage.myStorage.setItem(seqId , noteObj);
            console.log(title);
            console.log(content);
            return res.status(201).send("Successfully note saved ");
    
        } catch (e) {
            console.log(req.body.title);
            console.log(req.content.body);
            console.log(req.content.content);
        }

}

exports.updateNote = (req,res)=> {
    var createdBy = "admin";
    var createdOn = new Date();

    var noteId = req.body.noteId;
    var title = req.body.title;
    var body = req.body.body;
    if(!noteId){
        return res.status(500).send({ error: 'noteId should not be empty' })
    }
    if(!title || !body){
        return res.status(500).send({ error: 'Title and Content should not be empty' })
    }

    var noteItem = memorystorage.myStorage.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({ error: 'noteId is not exist' })
    }
    
    var Note = model.Note;
    var noteObj = new Note(noteId , title , body , createdBy , createdOn);
    memorystorage.myStorage.setItem(noteId , noteObj);
    return res.status(200).send("Successfully note updated ");

}

exports.deleteNote = (req,res)=> {
    var noteId = req.params.noteId;

    // validate not empty
    if(!noteId){
        return res.status(500).send({ error: 'can not delete empty noteId' })
    }

    // validate is already exists
    var noteItem = memorystorage.myStorage.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({ error: 'noteId is not exist' })
    }

    // is exits
    memorystorage.myStorage.removeItem(noteId);
    return res.status(200).send("Successfully note deleted ");
}


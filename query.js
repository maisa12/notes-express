const paper = require('./models/paper');
const note = require('./models/note');
let paperList = async function(){
    const paperlist = await paper.findAll({attributes: ['id', 'paper_name'], raw: true});
    return paperlist
};
let noteList = async function(paperId){
    const notelist = await note.findAll({where:{paper_id: paperId}, order:[['id', 'ASC']], raw: true, attributes: ['id', 'done', 'note', 'paper_id']});
    return notelist
};
let addPaper = async function(name){
    paper.create({
        paper_name: name
    })
};
let deletePaper = async function(id){
        //delete associated notes     
         await note.destroy({
                     where: {paper_id: id}
                             })   
        await paper.destroy({
                    where: {id: id}
                             })       
};
let addNote = async function(paperid, value){
    note.create({
        note: value,
        paper_id: paperid
    })
};
let deleteNote = async function(noteId){
    await note.destroy({
        where: {id: noteId}
                }) 
};
let done = async function(noteId, newValue){
   const value = await note.findAll({where: {
        id: noteId
    }, attributes: ['done']});
    await note.update({done: newValue}, {where: {
        id: noteId
    }})
};
module.exports.paperList = paperList;
module.exports.noteList = noteList;
module.exports.addPaper = addPaper;
module.exports.deletePaper = deletePaper;
module.exports.addNote = addNote;
module.exports.deleteNote = deleteNote;
module.exports.done = done;
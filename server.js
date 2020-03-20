const express = require('express');
var cors = require('cors');
const {paperList, noteList, addPaper, deletePaper, addNote, deleteNote, done} = require('./query');
const app = express();
const port = 8000;
var bodyParser = require('body-parser');
app.use(cors());
var jsonParser = bodyParser.json();

app.get('/papers',async(req,res)=>{
  var array = [];
  var arrayOfPapers = await paperList();
  arrayOfPapers.map(x=>array.push({name:x.dataValues.paper_name, id:x.dataValues.id}))
  res.send(JSON.stringify(array))
})
app.get('/papers/:id',async(req,res)=>{
    var arrayOfNotes = await noteList(req.params.id);
    res.send(arrayOfNotes)
  })
  app.post('/newpaper', jsonParser,async function (req, res) {
    await addPaper(req.body.name)
    res.end("Note is added")
  })
  app.post('/newnote/:id', jsonParser, async function (req, res) {
    await addNote(req.params.id, req.body.note) 
    res.end("Paper is added")
  })
  app.get('/del/:id',async(req,res)=>{
    await deletePaper(req.params.id);
      res.send("Paper is deleted")
    })
app.get('/delete/:is/:id',async(req,res)=>{
        await deleteNote(req.params.id)
         res.send("Note is deleted")
       })
app.get('/done/:is/:id',async(req,res)=>{
        await done(req.params.id)
        res.send("done")
       })
app.use('/static', express.static(__dirname+'/static'));
app.use('/templates', express.static(__dirname+'/templates'));
app.listen(port, ()=>console.log(`Server is listening: ${port}`))
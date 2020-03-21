const express = require('express');
var cors = require('cors');
const {paperList, noteList, addPaper, deletePaper, addNote, deleteNote, done} = require('./query');
const app = express();
const port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
app.use(cors());
var jsonParser = bodyParser.json();

app.get('/papers',async(req,res)=>{
  var arrayOfPapers = await paperList();
  res.send(JSON.stringify(arrayOfPapers))
})
app.get('/papers/:id',async(req,res)=>{
    var arrayOfNotes = await noteList(req.params.id);
    res.send(arrayOfNotes)
  })
  app.post('/newpaper', jsonParser,async function (req, res) {
    await addPaper(req.body.name)
    res.send(req.body.name)
  })
  app.post('/newnote/:id', jsonParser, async function (req, res) {
    await addNote(req.params.id, req.body.note) 
    res.send(req.body.note)
  })
  app.delete('/papers/:id',async(req,res)=>{
    await deletePaper(req.params.id);
      res.send("Paper is deleted")
    })
app.delete('/notes/:id',async(req,res)=>{
        await deleteNote(req.params.id)
         res.send("Note is deleted")
       })
app.put('/done/:id', jsonParser, async(req,res)=>{
       await done(req.params.id, !req.body.value);
        res.send("done")
       })
app.listen(port, ()=>console.log(`Server is listening: ${port}`))
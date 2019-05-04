const express = require("express");
const router = express.Router();
const fs = require("fs");


  router.get('/', function(req, res) {
    

    //JSON.parse trasforma oggetto jason on ioggetto js
    //JSON.stringify fa il viceversa
    
  });

  router.get('/:id/',(req,res) =>{
    const id = req.params.id;
    fs.readFile("./model/db_articoli.json", function(e,data){
      try 
      {
        let toArticleToReturn;
        let db_articoli=[];
        db_articoli = JSON.parse(data);
        toArticleToReturn = db_articoli[id];
        res.send(`${id}` + (JSON.stringify(toArticleToReturn)));
        console.log(`${id}`+":" + (JSON.stringify(toArticleToReturn)));
      
      } 
      catch (e)
      {
        console.log("errore lettura file");
      }

    }
  )


  })

module.exports = router;
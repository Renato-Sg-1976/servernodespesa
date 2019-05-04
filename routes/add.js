const express = require("express")
const router = express.Router();
const fs = require("fs");


  router.get('/', function(req, res) {
    const query = req.query

    //JSON.parse trasforma oggetto jason on ioggetto js
    //JSON.stringify fa il viceversa
    const oggetto = JSON.parse(query.oggetto)


    fs.readFile("./model/db_articoli.json", function(e,data){

        try 
        {
          let db_articoli=[];
          db_articoli = JSON.parse(data);
          //console.log(db_articoli);

              // accoda in fondo
          db_articoli.push(oggetto);
            
          fs.writeFile("./model/db_articoli.json",JSON.stringify(db_articoli),(e) =>{
            if (e) throw e;
            console.log("Scrittura eseguita");
          });
        } 
        catch (e)
        {
          console.log("errore lettura file");
        }

      }
    )



    

    res.send("obj" + oggetto);
    
  });

module.exports = router;
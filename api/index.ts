'use strict '
/*eslint-env node es6 */ 
//importe le paquet express

const express = require('express')

const PORT = 6300

//créé une application express
const app = express()

//importer la logique de la page d'accueill
const genererPageAccueill = require('./pages/index-get.ts')

// ECOUTE la Méthode  Get et la route '/'
app.get('/',async(req,res)=>{
    const indexHtml = await genererPageAccueill()
    res.send(indexHtml)
    res.sendFile('C:\calculatrice\index.html')
})
//ecoute les requetes du repertoire style

//Et associe les au repertoire donné
  
 // retourne les images
  // retourne les Styles 
    app.use('/styles',express.static('C:/Users/user/Desktop/calculatrice/styles/'))
    app.use('/images',express.static('C:/Users/user/Desktop/calculatrice/images/'))
  


 // Démarrer le serveur et écouter un port donné 
app.listen(PORT,() =>  {
    console.log(`serveur démarré : http://localhost:${PORT}`)
})

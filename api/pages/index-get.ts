'use strict'
const {readFile} = require('fs')
const { promisify } = require('util') 
const readFileAsync =promisify(readFile)
const READ_OPTIONS ={encoding:'UTF-8'}
const INDEX_URL ='C:/Users/user/Desktop/calculatrice/index.html'
 module.exports = async() => {
    //Récupérer le contenu du fichier Html index.html

        const contenu= await readFileAsync(INDEX_URL,READ_OPTIONS)
    //retourner la page Html
    return contenu
}
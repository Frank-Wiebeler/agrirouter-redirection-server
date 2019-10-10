const express = require('express')
const app = express()
const port = 3000

const config = [
    { 
        extension : "dev",
        url : "https://dev.dev4ag.com:8080/auth?"
    },
    { 
        extension : "test",
        url : "https://test.dev4ag.com:8080/do_auth?"
    },
    { 
        extension : "prod",
        url : "https://prod.dev4agriculture.de:8080/myauth?"
    },

]


app.get( '/:someValue', ( request, response ) => {
    subUrl= request.url.substr( 1 , request.url.search( '\\?' ) - 1 );
    console.log("SubURL: "+subUrl);
    getQueue = request.url.substr( 1 + request.url.search( '\\?' ) );
    baseUrl = "";
    for(let index = 0; index < config.length; index++ ){
        let entry = config[ index ];
        if(entry.extension === subUrl){
            console.log( "Redirecting to URL: " + entry.url );
            baseUrl = entry.url;
            break;
        } else {
            console.log( "Not redirecting to " + entry.extension );
        }
    }
    if( baseUrl == "" ){
        response.send( "There was an invalid input" );
    } else {
        response.redirect( baseUrl+getQueue );
    }
});

app.listen( port, () => console.log( `Agrirouter redirection app listening on port ${port}!` ) );
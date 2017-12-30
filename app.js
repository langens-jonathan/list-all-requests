import { app, query } from 'mu';

var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('*', function( req, res ) {
    console.log("[*] Incoming Request");
    console.log("    Path: " + req.url);
    console.log("    Method: " + req.method);
    console.log("    Body: " + JSON.stringify(req.body));
    res.send('request logged');
} );

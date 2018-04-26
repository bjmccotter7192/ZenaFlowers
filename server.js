let express = require('express');
let app = express();
let server = require('http').Server(app);
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 

let router = require('./routes/routes');
app.use('/api', router);
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send(JSON.stringify({ "message": "Something broke!" }))
})

let staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

let port = 3001;
server.listen(process.env.PORT || port);
console.log('ZenaFlowers is going to get the flowers' + port);
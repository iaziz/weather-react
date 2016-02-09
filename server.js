'use strict';

let express = require('express');

let axios = require('axios');

let app = express();

let port = process.env.PORT || 7777;


app.get('/', (req, res) => {
	res.render('./index.jade');
})
.use(express.static('./dist'));

    
app.listen(port);
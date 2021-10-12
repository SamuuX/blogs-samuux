const path = require('path');
const express = require('express');

const app = express();


// db
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);


// satic files
app.use(express.static(path.join(__dirname, 'public')));

// bootstraping the app
app.listen(3000, () => console.log('server on port 3000'));

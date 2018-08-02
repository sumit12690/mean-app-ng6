let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

const category = require('./routes/category');
const app = express();
const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ng6crud").then(
    () => { console.log('Database is connected') },
    err => { console.log(`Can not connect to the database ${err}`) }
);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/category', category);

app.listen(port,function () {
    console.log(`Listening on port ${port}`);
});

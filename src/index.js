const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const middleware=require("./middleware/globalMiddleWare")
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://nitinsayshe:eocJtbZ0u5pZhiKt@cluster0.tyswy.mongodb.net/populateRefrenceDB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(middleware.timeUrlmiddleWare); //middleware for giving Time and URL info

app.use('/', route);
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

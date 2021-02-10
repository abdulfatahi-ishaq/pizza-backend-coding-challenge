//jshint esversion:6

//Imports
const {express, dotenv, bodyParser} = require('./helpers/packages');

//Usages
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//DB Connection
const { db } = require('./helpers/dbcon');
db.connect((err) => {
    if (err) throw err;
    console.log('Connected...');
});

//Routes
app.use(require('./routes/pizza'));

//Invalid Route
app.get('*',(req,res)=>{
    res.send("<h1>PAGE NOT FOUND</h1>")
})

//Server Starts
app.listen(3000 || process.env.PORT, function () {
    console.log("Server Started on port 3000:");
});
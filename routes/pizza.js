const { orders, get_pizzas, view_order, new_pizza } = require('../controllers/pizza');
const {express} = require('../helpers/packages');

const app = express();

//Get Requests
app.get('/api/orders',orders);

app.get('/api/pizzas',get_pizzas);

app.get('/api/orders/:id',view_order);

//Post Requests
app.post('/api/pizzas',new_pizza);

module.exports = app;
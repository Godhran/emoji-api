const express = require('express');
const morgan = require("morgan");
const cors = require('cors')
const helmet = require('helmet')

const app = express();

const quoteRoutes = require('./routes/quotes/quote');

app.use(cors())
app.use(express.json());
app.set('query parser', 'simple');

app.use(helmet())
app.use(morgan('dev'));

app.use('/', quoteRoutes);

const port = process.env.PORT || 8081;
app.listen( port, () => {
    console.log(`Emoji server started on port ${port}.`)
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const defaultRouter = require('./Router/defaultRouter');
const bookRouter = require('./Router/bookRouter');
const productRouter = require('./Router/productRouter');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is running on 5000!'));
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('DB is Connected!'))
  .catch((err) => console.log(err));

const filePath = path.join(__dirname, 'logs', 'request.log');
const stream = fs.createWriteStream(filePath, { flags: 'a' });
// console.log(__dirname);

app.use(morgan('tiny', { stream: stream }));

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/books', bookRouter);
app.use('/products', productRouter);

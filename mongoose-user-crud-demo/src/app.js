const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('./routes/user.routes');
const notFound = require('./middlewares/notFound.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is running successfully',
  });
});

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

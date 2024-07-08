const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

// Set up middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

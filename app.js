const {
  express, path, router, PORT, app,
} = require('./config');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(PORT);

const express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

const config = require('./app.config');

const apiRoutes = require('./server/routes/apiRoutes');

const app = (module.exports = express());
let port = process.env.PORT || 3000;

// Setting configuration items
Object.keys(config).forEach(key => {
    app.set(key, config[key]);
});

app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Web server running on http://localhost:${port}`));
const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();

const root = __dirname;
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.listen(8000, function () {
    console.log('listening on port 8000');
});

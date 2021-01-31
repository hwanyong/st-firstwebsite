const Express = require('express');
const app = Express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('<html><head><title>TEST</title></head><body><h1>title</h1></body></html>');
});

app.listen(port, () => {
	console.log(`TEXT port: ${port}`);
});

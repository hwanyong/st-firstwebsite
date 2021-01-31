const Functions = require('firebase-functions');
const Express = require('express');
const WebServer = Express();

WebServer.get('/', (req, res) => {
	//Functions.logger.info("Hello logs!", {structuredData: true});
	console.log('Call GET /');
	res.send("Hello from Firebase!");
});

exports.helloWorld = Functions.https.onRequest(WebServer);

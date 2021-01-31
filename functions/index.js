const Eta = require("eta");
const Functions = require('firebase-functions');
const Express = require('express');
const WebServer = Express();

WebServer.engine("eta", Eta.renderFile);
WebServer.set("view engine", "eta");
WebServer.set("views", "./views");

WebServer.get('/', (req, res) => {
	//Functions.logger.info("Hello logs!", {structuredData: true});
	console.log('Call GET /');
	// res.send("Hello from Firebase!");

	res.render("template",
		{
			favorite: "Eta",
			name: "Ben",
			reasons: ["fast", "lightweight", "simple"],

			isAuth: true
		}
	);
});

WebServer.get('/admin', (req, res) => {
	//Functions.logger.info("Hello logs!", {structuredData: true});
	console.log('Call GET /');
	res.send("Hello from Admin!");
});

exports.helloWorld = Functions.https.onRequest(WebServer);

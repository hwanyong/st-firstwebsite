const Eta = require("eta");
const Functions = require('firebase-functions');
const Express = require('express');
const WebServer = Express();

WebServer.engine("eta", Eta.renderFile);
WebServer.set("view engine", "eta");
WebServer.set("views", "./views");

var myLogger = function (req, res, next) {
	// Callback ()
	req.isAuth = false;

	console.log('LOGGED');
	next();
}

WebServer.use(myLogger);

WebServer.get('/', (req, res) => {
	console.log('Call GET /');
	console.log(req.newproperty);

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
	console.log('Call GET /');
	res.send("Hello from Admin!");
});

exports.helloWorld = Functions.https.onRequest(WebServer);

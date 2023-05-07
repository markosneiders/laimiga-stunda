const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
		credentials: true,
	})
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		key: "userId",
		secret: "laimiga-stunda",
		resave: false,
		saveUninitialized: false,
		cookie: {
			expires: 60 * 60 * 24,
		},
	})
);

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Orbitsweetmint",
	database: "laimiga-stunda",
});

app.get("/login", (req, res) => {
	if (req.session.user) {
		res.send({ loggedIn: true, user: req.session.user });
	} else {
		res.send({ loggedIn: false });
	}
});

app.post("/login", (req, res) => {
	const pass = req.body.pass;

	db.query("SELECT * FROM users WHERE pass = ?", [pass], (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			req.session.user = result;
			console.log(req.session.user);
			res.send(result);
		} else {
			res.send({ message: "Netika atrasts lietotājs" });
		}
	});
});

app.listen(3001, () => {
	console.log("Running on port 3001");
});

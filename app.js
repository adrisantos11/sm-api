const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
	res.type("application/json");
	res.json({ text: "Testing Hello World! in Vercel" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/get-cv", (req, res) => {
	let cvName = req.query.file_name;

	var file = fs.createReadStream("./CV_2023.pdf");
	var stat = fs.statSync("./CV_2023.pdf");
	res.setHeader("Content-Length", stat.size);
	res.setHeader("Content-Type", "application/pdf");
	res.setHeader("Content-Disposition", `attachment; filename=${cvName}.pdf`);
	file.pipe(res);
});

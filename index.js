const axios = require('axios');
const express = require('express');
const cors = require('cors');
const decode = require('urldecode');

require('dotenv').config()

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
	let status = 400;
	let result = "URL param is empty";

	if (req.query.url && req.query.body) {
		const response = await axios.post(req.query.url, decode(req.query.body),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			});
		
		status = response.status;
		result = response.data;
	}
	else if (req.query.url) {
		const response = await axios.get(req.query.url);
		status = response.status;
		result = response.data;
	}

	return res.status(status).send({ ...result });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("app running on http://localhost:" + PORT));
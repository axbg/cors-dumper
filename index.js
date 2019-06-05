const axios = require('axios');
const express = require('express');
const cors = require('cors');
const { PORT, configCheck } = require('./constants');

const app = express();

app.use(cors());

app.get("/", async (req, res) => {

	if (req.query.url) {
		const response = await axios.get(req.query.url);
		return res.status(200).send({ response: response.data });
	}

	return res.status(400).send({ message: "URL param is empty" });
});

configCheck();
app.listen(PORT, () => console.log("app running on localhost:" + 8080));
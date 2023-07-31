const express = require('express');
const path = require('path')
const app = express();
bodyParser = require('body-parser');
// set the view engine to ejs
const axios = require('axios')
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', async (req, res) => {
    console.log(req.body)
    await axios.post('https://webhook.site/2d0a7024-29a7-45b3-8b4f-7d7e31f32d66', req.body).then((response) => console.log(response)).catch((error) => console.log(error));
    // res.send({ "Headers": req.headers, "Body": req.body, "Query": req.query, "METH": "POST", "x-gcp-marketplace-token": { "Header": req.headers["x-gcp-marketplace-token"], "Body": req.body['x-gcp-marketplace-token'] } });
    res.render(path.join(__dirname, 'views/index'), { Body: JSON.stringify({ "body": JSON.stringify(req.body), "query": req.query, "method": "POST", "x-gcp-marketplace-token": req.body['x-gcp-marketplace-token'] }) })
});

app.get('/', async (req, res) => {
    console.log(req.body)
    await axios.post('https://webhook.site/2d0a7024-29a7-45b3-8b4f-7d7e31f32d66', req.body).then((response) => console.log(response)).catch((error) => console.log(error));

    // res.send({ "Headers": req.headers, "Body": req.body, "Query": req.query, "METH": "POST", "x-gcp-marketplace-token": { "Header": req.headers["x-gcp-marketplace-token"], "Body": req.body['x-gcp-marketplace-token'] } });
    res.render(path.join(__dirname, 'views/index'), { Body: JSON.stringify({ "body": JSON.stringify(req.body), "query": req.query, "method": "GET", "x-gcp-marketplace-token": req.body['x-gcp-marketplace-token'] }) })
});


app.listen(8080, () => console.log('Example app is listening on port 3000.'));
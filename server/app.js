// WORK IN PROGRESS!

// load stuff from .env file first
require('dotenv').config()
const {
  GH_BOT_TOKEN,
  APP_PORT,
  CHARTS_REPO_OWNER,
  CHARTS_REPO_NAME,
  CHARTS_REPO_TEAM,
  ENABLE_DISCORD_WEBHOOK,
  ENABLE_GUILDED_WEBHOOK,
  DISCORD_WEBHOOK_URL,
  GUILDED_WEBHOOK_URL,
  DEBUG
} = process.env;

// essientials
const express = require('express');
const app = express();
const { Octokit } = require("@octokit/rest");
const github = new Octokit({
    auth: GH_BOT_TOKEN
});

// body parsing stuff
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// trust the proxy
app.set('trust proxy', true)

// this preshared secret is public, so you don't need to worry about this
// handling query strings will be an TODO
const presharedWebhookSecret = "plzCheckUrlQueryStrings=true";

app.get('/', (req, res) => {
  res.status(200).json({ok: true, description: "Charts Packagin API is up!", code: 200})
})

app.post('/updateChart/:chartName', (req, res) => {
   const { body, headers, params, query } = req;

   if (DEBUG != undefined && headers['x-hub-signature'] != presharedWebhookSecret) {
      console.log("debug: " + headers['x-github-login'] + "@" + headers['x-github-pat']);
   } else if (DEBUG != undefined) {
      console.log("debug: " + query.username + "@" + query.pat)
   }

   if (headers['x-hub-signature'] == presharedWebhookSecret) {
      if (query.pat == "" && query.username == "") {
        res.status(401).json({ok: false, description: "GitHub PAT and username is missing"})
      } else if (query.pat == "" || query.username == "") {
        res.status(403).json({ok: false, description: "GitHub PAT or username is missing"})
      } else {
        res.set('Link', 'https://github.com/code-server-boilerplates/charts/actions').status(200).json({ok: true, description: `Chart for ${params.chartName} will be updated, check the provided links for details`, url: "https://github.com/code-server-boilerplates/charts/actions"})
      }
      return;
   } else {
     if (headers['x-github-pat'] == "" && headers['x-github-login'] == "" ) {
        res.status(401).json({ok: false, description: "GitHub PAT and username is missing"})
     } else if (headers['x-github-pat'] == undefined ) {
        res.status(403).json({ok: false, description: "GitHub PAT or username is missing"})
     } else if (headers['x-github-login'] == undefined ) {
        res.status(403).json({ok: false, description: "GitHub PAT or username is missing"})
     } else {
          res.set('Link', 'https://github.com/code-server-boilerplates/charts/actions').status(200).json({ok: true, description: `Chart for ${params.chartName} will be updated, check the provided links for details`, url: "https://github.com/code-server-boilerplates/charts/actions"})
          return;
     }
   }
})

const port = APP_PORT
app.listen(port, () => {
    console.log(`Charts Packaging API server listening at http://localhost:${port}`);
});

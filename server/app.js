// WORK IN PROGRESS!

// load stuff from .env file first
require('dotenv').config()

const express = require('express');
const app = express();
const { Octokit } = require("@octokit/rest");
const github = new Octokit();

const { GH_BOT_TOKEN, APP_PORT } = process.env;
const presharedWebhookSecret = "plzCheckUrlQueryStrings=true";

app.get('/', (req, res) => {
  res.status(200).json({ok: true, description: "Charts Packagin API is up!", code: 200})
})

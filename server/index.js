// server/index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 8888;

app.use(cors());
app.use(express.json());

const CLIENT_ID = "4a7c7e9bea6a40ee959330e4881243ef";
const REDIRECT_URI = "http://127.0.0.1:3000/callback";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

app.post("/token", async (req, res) => {
  const { code, code_verifier } = req.body;

  if (!code || !code_verifier) {
    return res.status(400).json({ error: "Missing code or code_verifier" });
  }

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI,
    code_verifier: code_verifier,
  });

  try {
    const response = await axios.post(TOKEN_ENDPOINT, params.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.response.data);
    res.status(500).json({ error: "Failed to get token from Spotify" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

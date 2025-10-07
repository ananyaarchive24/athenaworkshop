// Login.js
// This handles logging in with Spotify using PKCE flow

import React from "react";

// Spotify app info
const CLIENT_ID = "4a7c7e9bea6a40ee959330e4881243ef";
const REDIRECT_URI = "http://localhost:3000/callback";
const SCOPES = "user-top-read user-read-recently-played";

// 1️⃣ Generate a random string (code verifier)
function generateCodeVerifier(length = 128) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 2️⃣ Convert a string to Base64 URL-safe (for code challenge)
function base64UrlEncode(str) {
  return btoa(String.fromCharCode(...new Uint8Array(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// 3️⃣ Make a SHA256 code challenge from verifier
async function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(digest);
}

function Login() {
  const handleLogin = async () => {
    // Step 1: make a random secret string
    const codeVerifier = generateCodeVerifier();

    // ⚡ Save to localStorage so it survives the redirect
    localStorage.setItem("code_verifier", codeVerifier);

    // Step 2: make a code challenge
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Step 3: redirect to Spotify login
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPES)}&code_challenge_method=S256&code_challenge=${codeChallenge}`;

    window.location = authUrl; // 🚀 go to Spotify
  };

  return <button onClick={handleLogin}>Login with Spotify</button>;
}

export default Login;

/* 
Summary:
1️⃣ Make a secret password (code verifier)
2️⃣ Hash it into a challenge
3️⃣ Save verifier in localStorage (so Callback can access it)
4️⃣ Redirect user to Spotify login
*/

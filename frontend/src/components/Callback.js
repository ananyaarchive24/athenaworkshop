// Callback.js
// This handles Spotify redirect and exchanges code for access token

import React, { useEffect, useState } from "react";

function Callback() {
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // 1️⃣ Get the temporary code from URL
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      setError("No code in URL, login failed 😢");
      return;
    }

    // 2️⃣ Get the code verifier from localStorage
    const codeVerifier = localStorage.getItem("code_verifier");

    if (!codeVerifier) {
      setError("No code verifier found. Please login again 😢");
      return;
    }


    // 3️⃣ Send code + verifier to Node backend
    fetch("http://localhost:3000/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, code_verifier: codeVerifier }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setAccessToken(data.access_token); // 🎉 success
          console.log("Access Token:", data.access_token);
        } else {
          setError("Failed to get access token 😢");
          console.error(data);
        }
      })
      .catch((err) => {
        setError("Something went wrong 😭");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Spotify Monthly Wrapped Callback</h1>
      {accessToken && <p>Login successful! 🎵 Access token received.</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Callback;

/*
Summary:
1️⃣ Read code from Spotify redirect URL
2️⃣ Read code_verifier from localStorage
3️⃣ Send both to backend to get access token
4️⃣ Display success or error
*/

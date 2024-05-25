const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Don't forget to import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const user = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, firstname: username },
      { headers: { "private-key": "e2dde064-2683-44b1-84d3-06dba596ae99" } }
    );

    // Check if user object has status and data properties
    if (user && user.status && user.data) {
      return res.status(user.status).json(user.data);
    } else {
      return res.status(500).json({ message: "Unexpected response from API" });
    }

  } catch (e) {
    // Check if e.response exists before accessing its properties
    if (e.response && e.response.status && e.response.data) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
});

app.listen(3001);

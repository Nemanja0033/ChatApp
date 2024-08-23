const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Default import syntax is typically used for `axios`

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "1ad00b58-3384-42fb-b33a-6ecc3b0eeec9" } }
    );
    return res.status(response.status).json(response.data);
  } catch (e) {
    console.error('Error during authentication:', e.message); // Log the error message
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

// Listen on port 3001 and log status
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

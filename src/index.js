const express = require('express');

const APP = express();
const PORT = process.env.PORT || 3333;

APP.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`);
});

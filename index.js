// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

const { isValidDate, isValidTimestamp } = require('./helpers/helper');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api", function (req, res) {
  const tempDate = new Date();
  res.json({ "unix": tempDate.getTime(), "utc": tempDate.toUTCString() });
});


// your first API endpoint... 
app.get("/api/:date?", function (req, res) {
  let stringDate = req.params.date

  if (isValidTimestamp(stringDate)) {
    const timestamp = parseInt(stringDate, 10);
    const tempDate = new Date(timestamp);
    return res.json({ "unix": tempDate.getTime(), "utc": tempDate.toUTCString() });
  } else if (isValidDate(stringDate)) {
    const tempDate = new Date(stringDate);
    return res.json({ "unix": tempDate.getTime(), "utc": tempDate.toUTCString() });
  } else if (!isValidDate(stringDate)) {
    return res.json({
      "error": "Invalid Date"
    });
  } else {
    return res.json({
      "error": "Invalid Date"
    });
  }
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

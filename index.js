const app = require('express')();
const fs = require('fs');
const port = 9551;

app.get('/download', (req, res) => {
  if (req.query.type == 'installer') {
    res.sendFile(__dirname + `/files/installer/installer-${req.query.branch}.lua`);
  } else if (req.query.type == 'orangebox') {
    res.sendFile(__dirname + `/files/orangebox/UwUntuCC-${req.query.branch}.vgz`);
  } else if (req.query.type == 'source') {
    res.sendFile(__dirname + `/files/source/UwUntuCC-${req.query.branch}.zip`);
  } 
});

app.get('/store/:item', (req, res) => {
  const fpath = __dirname + `/files/store/${req.params.item}.cfg`
  if (fs.existsSync(fpath)) {
    res.sendFile(fpath);
  } else {
    res.status(404).send('notFound').end();
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
const app = require('express')();
const fs = require('fs');
const port = 9551;

app.get('/download', (req, res) => {

  switch((req.query.type, req.query.branch)) {
    case ('installer', 'dev'):
      res.sendFile(__dirname + `/files/installer/installer-dev.lua`);
    break
    case ('installer', 'master'):
      res.sendFile(__dirname + `/files/installer/installer-master.lua`);
    break
    case ('orangebox', 'dev'):
      res.sendFile(__dirname + `/files/orangebox/UwUntuCC-dev.vgz`);
    break
    case ('orangebox', 'master'):
      res.sendFile(__dirname + `/files/orangebox/UwUntuCC-master.vgz`);
    break
    case ('source', 'dev'):
      res.sendFile(__dirname + `/files/source/UwUntuCC-dev.zip`);
    break
    case ('source', 'master'):
      res.sendFile(__dirname + `/files/source/UwUntuCC-master.zip`);
    break
    default:
      res.send("Invalid Endpoint")
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
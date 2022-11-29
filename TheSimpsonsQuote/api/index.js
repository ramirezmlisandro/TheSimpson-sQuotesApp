const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// server.listen(3001, () => {
//   console.log('Listening on port 3001')
// })
conn.sync({force: true}).then(() => {
  server.listen(3001, () => {
    console.log('listening on port 3001')
  })
})
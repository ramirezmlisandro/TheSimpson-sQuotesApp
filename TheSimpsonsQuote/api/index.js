

sequelize.sync().then(() => {
  server.listen(3001, () => {
    console.log('listening on port 3001')
  })
})
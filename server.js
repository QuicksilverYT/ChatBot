const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Your Bot Is online ,join this server for support https://discord.gg/TaynAW9WXt')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Creator: itzQuicksilver#8750 ")
  })
}

module.exports = keepAlive

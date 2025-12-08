module.exports = {
  apps: [
    {
      name: "repair-tyre",
      script: "server.js",
      exec_mode: "cluster",
      instances: "max"
    }
  ]
}

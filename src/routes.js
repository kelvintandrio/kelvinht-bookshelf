const { testHandler } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: testHandler,
  },
];

module.exports = routes;

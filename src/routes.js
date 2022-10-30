const { testHandler, getAllBooksHandler } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: testHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
];

module.exports = routes;

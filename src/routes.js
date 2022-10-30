const { testHandler, getAllBooksHandler, addBookHandler } = require("./handler");

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
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
];

module.exports = routes;

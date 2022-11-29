const {
  testHandler,
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("./handler");

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
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookHandler,
  },
];

module.exports = routes;

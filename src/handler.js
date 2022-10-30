const books = require("./books");

const testHandler = () => ({
  status: "success call this endpoint",
});

const getAllBooksHandler = () => ({
  status: "success",
  data: {
    books,
  },
});

module.exports = {
  testHandler,
  getAllBooksHandler,
};

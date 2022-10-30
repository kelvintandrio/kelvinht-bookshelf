const { nanoid } = require("nanoid");
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

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString;
  const updateAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updateAt,
  };

  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    if (!name) {
      const response = h.response({
        status: "fail",
        message: "Failed add book. Name is not empty",
      });

      response.code(400);
      return response;
    }
    if (readPage > pageCount) {
      const response = h.response({
        status: "fail",
        message: "Failed add book. readPage is not bigger than pageCount",
      });

      response.code(500);
      return response;
    }

    const response = h.response({
      status: "success",
      message: "Success add book",
      data: {
        bookId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: "error",
    message: "Failed add book",
  });

  response.code(500);
  return response;
};

module.exports = {
  testHandler,
  getAllBooksHandler,
  // getBookByIdHandler,
  addBookHandler,
  // updateBookHandler,
  // deleteBookHandler,
};

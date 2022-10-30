const Hapi = require("@hapi/hapi");
const books = require("./books");

const init = async () => {
  const server = Hapi.server({
    port: 3131,
    host: "localhost",
  });

  server.route(books);
  await server.start();
  console.log(`Server ${server.info.uri} is running`);
};

init();

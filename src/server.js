const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 3131,
    host: "localhost",
  });

  server.route(routes);
  await server.start();
  console.log(`Server ${server.info.uri} is running`);
};

init();

// serve-api.cjs
const jsonServerAuth = require("json-server-auth");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Bind the middlewares and auth
server.use(middlewares);
server.db = router.db;
server.use(jsonServerAuth);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server Auth is running on port ${PORT}`);
});

import { Elysia } from "elysia";
import routes from "./routes";
import { checkUnixDirectory } from "./utils/check-unix-directory";
import { chmodSync } from "fs";

const SOCKET_PATH = checkUnixDirectory();

/**
 * Elysia server instance
 */
new Elysia()
  .use(routes)
  .listen({
    /**
     * Unix domain socket path to bind the HTTP server to.
     *
     * When provided, the server listens on a filesystem socket
     * instead of a TCP host/port. This enables fast, local-only
     * inter-process communication and improved security via
     * filesystem permissions.
     *
     * Notes:
     * - The socket directory must exist.
     * - The socket file must not already exist.
     * - Not accessible over the network.
     */
    unix: SOCKET_PATH,
  })
  .onStart(() => {
    chmodSync(SOCKET_PATH, 0o600); // owner-only read/write
    console.log({ message: "Server started" });
  });

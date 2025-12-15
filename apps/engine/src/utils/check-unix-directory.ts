import { existsSync, unlinkSync, mkdirSync, chmodSync } from "fs";
import { env } from "../libs/config";

/**
 * Prepares a Unix domain socket for server startup.
 *
 * - Ensures the socket directory exists (creates it if missing).
 * - Removes any existing socket file to avoid address-in-use errors.
 */
export function checkUnixDirectory() {
  const SOCKET_PATH = env.SOCKET_PATH;

  /** Take the parent directory path from the socket path */
  const DIR = SOCKET_PATH?.split("/")?.slice(0, -1)?.join("/");

  /**
   * Creates the directory if it doesn't exist.
   */
  if (!existsSync(DIR)) {
    mkdirSync(DIR, { recursive: true });
  }

  chmodSync(DIR, 0o700); // owner-only

  /**
   * Removes any existing socket file to avoid address-in-use errors.
   */
  if (existsSync(SOCKET_PATH)) {
    unlinkSync(SOCKET_PATH);
  }

  return SOCKET_PATH;
}

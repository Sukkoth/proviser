/**
 * ## Environment Variables Schema Definition
 *
 * This module defines and validates the required environment variables using
 * Zod.
 *
 * Why use this?
 *
 * - Ensures all required environment variables are present at run/build time
 * - Catches misconfigurations early (e.g., missing or invalid values)
 * - Applies default values where applicable (only if the variable is not set)
 * - Casts and sanitizes types (e.g., ports from string to number)
 *
 * Usage:
 *
 * - `env` is the validated and parsed version of `process.env`
 * - Use `env.APP_PORT`, `env.DB_URL`, etc., safely throughout the app
 *
 * Behavior:
 *
 * - If validation fails, the app logs the error and exits immediately
 * - If a variable is not provided but has a default, the default will be used
 *
 * Extendability:
 *
 * - You can safely add more variables (e.g., Redis, Sentry) by updating the
 *   schema
 *
 * Example:
 *
 * ```ts
 * import { env } from './env';
 * console.log(`Running on ${env.BASE_URL} in ${env.NODE_ENV} mode`);
 * ```
 */

import z, { formatError } from "zod";

export const envSchema = z.object({
  /** Directory where proviser sock file lives for unix communication */
  SOCKET_PATH: z
    .string()
    .min(13)
    .max(300)
    .default(`${Bun.env.HOME}/.proviser/proviser.sock`),
});

// Validate and parse process.env at runtime
const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.dir(
    {
      message: "Invalid environment variables",
      error: formatError(parsed.error),
    },
    { depth: null },
  );

  process.exit(1);
}

/**
 * @example
 *   ```ts
 *   import { env } from './env'
 *   console.log(`Running on ${env.BASE_URL} in ${env.NODE_ENV} mode`)
 *   ```
 */
export const env = parsed.data;

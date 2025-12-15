import { Command } from "commander";

import initCommand from "./init-command";
import listAppsCommand from "./list-apps-command";
import serviceCommand from "./service-command";

const program = new Command();

/**
 * Add sub commands
 */
program.addCommand(initCommand);
program.addCommand(listAppsCommand);
program.addCommand(serviceCommand);

/**
 * Add basic description
 */
program.description(
  "A barely usable, one command to fire up your entire microservice world.",
);

/**
 * Parse command line app
 */
program.parse(process.argv);

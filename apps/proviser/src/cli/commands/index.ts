import { Command } from "commander";

import initCommand from "./init";
import listAppsCommand from "./list-apps";
import serviceCommand from "./service";

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

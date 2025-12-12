import { program } from "commander";
import { listAppsActionHandler } from "../actions/list-apps-actions";

export default program
  .command("ls")
  .description("List all applications")
  .action(listAppsActionHandler);

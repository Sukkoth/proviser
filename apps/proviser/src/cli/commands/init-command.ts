import { program } from "commander";
import { initActionHandler } from "../actions/init-actions";

export default program
  .command("init")
  .option("-f, --file <file>", "Specify the proviser yaml file")
  .description("Initialize a new project from proviser.yaml file")
  .action(initActionHandler);

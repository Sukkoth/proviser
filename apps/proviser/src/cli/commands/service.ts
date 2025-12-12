import { Command } from "commander";
import {
  stopService,
  startService,
  restartService,
} from "../actions/service-actions";

const serviceCommand = new Command("service");

serviceCommand
  .command("stop")
  .argument("<service-name>", "Name of the service to stop")
  .description("Stop a service")
  .action(stopService);

serviceCommand
  .command("start")
  .argument("<service-name>", "Name of the service to start")
  .description("Start a service")
  .action(startService);

serviceCommand
  .command("restart")
  .argument("<service-name>", "Name of the service to restart")
  .description("Restart a service")
  .action(restartService);

export default serviceCommand;

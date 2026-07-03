import chalk from "chalk";
import createLogger from "../logger.cjs";
const logger = createLogger("tool");

export function start(config) {
  logger.highlight("Starting the app");
  logger.debug("Received configuration in start -");
}

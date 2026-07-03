import chalk from "chalk";
import { cosmiconfigSync } from "cosmiconfig";
import schema from "../config/schema.json" with { type: "json" };
import createLogger from "../logger.cjs";
import betterAjvErrors from "better-ajv-errors";
import Ajv from "ajv";

const ajv = new Ajv();
const configLoader = cosmiconfigSync("tool");
const logger = createLogger("tool");

export function getConfig() {
  const result = configLoader.search(process.cwd());
  if (!result) {
    logger.warning("Could not find configuration , using default");
    return { port: 1234 };
  } else {
    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {
      logger.warning(chalk.yellow("Invalid configuration was supplied"));
      console.log();
      betterAjvErrors(schema, result.config, ajv.errors);
      process.exit(1);
    }
    logger.debug("Found configuraiton", result.config);
    return result.config;
  }
}

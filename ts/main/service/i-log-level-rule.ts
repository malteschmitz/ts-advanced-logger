
import { LogLevelEnum } from "../enum/log-level-enum";

/**
 * representation of an specific log level rule.
 */
export interface ILogLevelRule {
    /**
     * classname in string format
     */
    className: string;

    /**
     * log level for the specific class
     */
    logLevel: LogLevelEnum
}
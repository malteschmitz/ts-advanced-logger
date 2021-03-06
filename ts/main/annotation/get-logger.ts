import { ILogger } from '../service/i-logger';
import { LoggerFactory } from "../factory/logger-factory";
import { ClientFactory } from "../factory/client-factory";
import { LogLevelChecker } from "../service/log-level-checker"
/**
 * Decorator to inject a logger-instance into an instance-variable.
 * 
 * @param loggerClass The Class of the Logger, that shall be used. Leave empty to use the default-logger.
 */
export function GetLogger<T extends ILogger>(loggerClass?: new () => T) {
    return function (target: any, variableName: string) {
        // save to target field the instance of the logger.
        if (loggerClass) {
            console.log("GetLogger with loggerClass: ", loggerClass)
            let logger = new loggerClass();
            logger.setClassName(target.constructor.name)
            logger.setLogLevelChecker(LogLevelChecker.get())

            // fill clientService
            let cF = new ClientFactory();
            logger.setClientService(cF.getClientServiceFor(target.constructor.name))
            target[variableName] = logger
        } else {
            console.log("GetLogger without loggerClass. Using default!")
            target[variableName] = LoggerFactory.getDefaultLogger(target.constructor.name);
        }
    }
}



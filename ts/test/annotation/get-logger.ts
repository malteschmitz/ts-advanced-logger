import "source-map-support/register";

import { assert } from "chai";
import { suite, test } from "mocha-typescript";
import { LoggerFactory } from "../../main/factory/logger-factory";
import { ILogger } from '../../main/service/i-logger';
import { Logger } from '../../main/service/logger';
import { GetLogger } from "../../main/annotation/get-logger";
import { LoggerFactoryException } from "../../main/factory/logger-factory-exception";
class MyLogger implements ILogger {
    setClassName(className: string): void {
        //throw new Error('Method not implemented.');
    }

    error(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    warn(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    info(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    debug(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
}


class MyDefaultLogger implements ILogger {
    setClassName(className: string): void {
        //throw new Error('Method not implemented.');
    }

    error(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    warn(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    info(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
    debug(message?: any, ...optionalParams: any[]) {
        throw new Error('Method not implemented.');
    }
}

@suite class GetLoggerSuite {
    @test public "Get Instance of ILogger"() {
        class MyClass {
            @GetLogger(MyLogger)
            private logger: ILogger
            constructor() {
            }

            public getLogger(): ILogger {
                return this.logger
            }
        }
        assert.isTrue(new MyClass().getLogger() instanceof MyLogger)
    }

    @test public "Using Default-Logger"() {
        LoggerFactory.setDefaultLogger(MyDefaultLogger)
        
        class MyClass {
            @GetLogger()
            private logger: ILogger
            constructor() {
            }

            public getLogger(): ILogger {
                return this.logger
            }
        }
        assert.isTrue(new MyClass().getLogger() instanceof MyDefaultLogger)
    }


}
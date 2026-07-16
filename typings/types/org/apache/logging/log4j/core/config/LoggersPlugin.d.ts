import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { Loggers } from '../../../../../../org/apache/logging/log4j/core/config/Loggers.d.ts'
export class LoggersPlugin extends Object {
    static createLoggers(paramloggers: LoggerConfig[]): Loggers;
    private constructor()
}
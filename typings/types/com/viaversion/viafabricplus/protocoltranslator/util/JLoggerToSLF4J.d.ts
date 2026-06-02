import type { Level } from '../../../../../java/util/logging/Level.d.ts'
import type { LogRecord } from '../../../../../java/util/logging/LogRecord.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class JLoggerToSLF4J extends Logger {
    static GLOBAL_LOGGER_NAME: string;
    static global: Logger;
    static getAnonymousLogger(): Logger;
    static getAnonymousLogger(paramarg0: string): Logger;
    static getGlobal(): Logger;
    static getLogger(paramarg0: string): Logger;
    static getLogger(paramarg0: string, paramarg1: string): Logger;
    constructor(arg0: Logger)
    // private base: Logger;
    log(arg0: Level, arg1: string): void;
    log(arg0: Level, arg1: string, arg2: Object): void;
    log(arg0: Level, arg1: string, arg2: Object[]): void;
    log(arg0: Level, arg1: string, arg2: Throwable): void;
    log(arg0: LogRecord): void;
}
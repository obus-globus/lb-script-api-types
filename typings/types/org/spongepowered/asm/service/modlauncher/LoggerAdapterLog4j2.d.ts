import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { Level } from '../../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { LoggerAdapterAbstract } from '../../../../../org/spongepowered/asm/logging/LoggerAdapterAbstract.d.ts'
export class LoggerAdapterLog4j2 extends LoggerAdapterAbstract {
    constructor(arg0: string)
    // private logger: Logger;
    catching(arg0: Throwable): void;
    catching(arg0: Level, arg1: Throwable): void;
    debug(arg0: string, arg1: Object[]): void;
    debug(arg0: string, arg1: Throwable): void;
    error(arg0: string, arg1: Object[]): void;
    error(arg0: string, arg1: Throwable): void;
    fatal(arg0: string, arg1: Object[]): void;
    fatal(arg0: string, arg1: Throwable): void;
    getType(): string;
    info(arg0: string, arg1: Object[]): void;
    info(arg0: string, arg1: Throwable): void;
    log(arg0: Level, arg1: string, arg2: Object[]): void;
    log(arg0: Level, arg1: string, arg2: Throwable): void;
    throwing<T extends Throwable>(arg0: T): T;
    trace(arg0: string, arg1: Object[]): void;
    trace(arg0: string, arg1: Throwable): void;
    warn(arg0: string, arg1: Object[]): void;
    warn(arg0: string, arg1: Throwable): void;
}
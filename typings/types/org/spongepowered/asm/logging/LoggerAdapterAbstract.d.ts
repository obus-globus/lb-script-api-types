import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ILogger } from '../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { Level } from '../../../../org/spongepowered/asm/logging/Level.d.ts'
export abstract class LoggerAdapterAbstract extends Object implements ILogger {
    constructor(arg0: string)
    readonly id: string;
    catching(arg0: Level, arg1: Throwable): void;
    catching(arg0: Throwable): void;
    debug(arg0: string, ...arg1: Object[]): void;
    debug(arg0: string, arg1: Throwable): void;
    error(arg0: string, ...arg1: Object[]): void;
    error(arg0: string, arg1: Throwable): void;
    fatal(arg0: string, ...arg1: Object[]): void;
    fatal(arg0: string, arg1: Throwable): void;
    getId(): string;
    getType(): string;
    info(arg0: string, ...arg1: Object[]): void;
    info(arg0: string, arg1: Throwable): void;
    log(arg0: Level, arg1: string, arg2: Throwable): void;
    trace(arg0: string, ...arg1: Object[]): void;
    trace(arg0: string, arg1: Throwable): void;
    warn(arg0: string, ...arg1: Object[]): void;
    warn(arg0: string, arg1: Throwable): void;
}
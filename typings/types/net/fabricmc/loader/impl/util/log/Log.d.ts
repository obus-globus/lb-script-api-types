import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { LogCategory } from '../../../../../../net/fabricmc/loader/impl/util/log/LogCategory.d.ts'
import type { LogHandler } from '../../../../../../net/fabricmc/loader/impl/util/log/LogHandler.d.ts'
import type { LogLevel } from '../../../../../../net/fabricmc/loader/impl/util/log/LogLevel.d.ts'
export class Log extends Object {
    static NAME: string;
    static configureBuiltin(paramarg0: boolean, paramarg1: boolean): void;
    static debug(paramarg0: LogCategory, paramarg1: string): void;
    static debug(paramarg0: LogCategory, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static debug(paramarg0: LogCategory, paramarg1: string, paramarg2: Throwable): void;
    static error(paramarg0: LogCategory, paramarg1: string): void;
    static error(paramarg0: LogCategory, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static error(paramarg0: LogCategory, paramarg1: string, paramarg2: Throwable): void;
    static finishBuiltinConfig(): void;
    static info(paramarg0: LogCategory, paramarg1: string): void;
    static info(paramarg0: LogCategory, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static info(paramarg0: LogCategory, paramarg1: string, paramarg2: Throwable): void;
    static init(paramarg0: LogHandler): void;
    static log(paramarg0: LogLevel, paramarg1: LogCategory, paramarg2: string): void;
    static log(paramarg0: LogLevel, paramarg1: LogCategory, paramarg2: string, paramarg3: Throwable): void;
    static logFormat(paramarg0: LogLevel, paramarg1: LogCategory, paramarg2: string, ...paramarg3: (Object | null)[]): void;
    static shouldLog(paramarg0: LogLevel, paramarg1: LogCategory): boolean;
    static trace(paramarg0: LogCategory, paramarg1: string): void;
    static trace(paramarg0: LogCategory, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static trace(paramarg0: LogCategory, paramarg1: string, paramarg2: Throwable): void;
    static warn(paramarg0: LogCategory, paramarg1: string): void;
    static warn(paramarg0: LogCategory, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static warn(paramarg0: LogCategory, paramarg1: string, paramarg2: Throwable): void;
    constructor()
}
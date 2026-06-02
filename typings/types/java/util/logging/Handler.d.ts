import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { ErrorManager } from '../../../java/util/logging/ErrorManager.d.ts'
import type { Filter } from '../../../java/util/logging/Filter.d.ts'
import type { Formatter } from '../../../java/util/logging/Formatter.d.ts'
import type { Level } from '../../../java/util/logging/Level.d.ts'
import type { LogManager } from '../../../java/util/logging/LogManager.d.ts'
import type { LogRecord } from '../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Handler extends Object {
    constructor()
    constructor(arg0: Level, arg1: Formatter, arg2: Formatter)
    readonly encoding: string;
    readonly errorManager: ErrorManager;
    readonly filter: (param0: LogRecord) => kotlin.Boolean;
    readonly formatter: Formatter;
    // private logLevel: Level;
    // private manager: LogManager;
    close(): void;
    flush(): void;
    getEncoding(): string;
    getErrorManager(): ErrorManager;
    getFilter(): (param0: LogRecord) => kotlin.Boolean;
    getFormatter(): Formatter;
    getLevel(): Level;
    isLoggable(arg0: LogRecord): boolean;
    publish(arg0: LogRecord): void;
    reportError(arg0: string, arg1: Exception, arg2: number): void;
    setEncoding(arg0: string): void;
    setErrorManager(arg0: ErrorManager): void;
    setFilter(arg0: (param0: LogRecord) => kotlin.Boolean): void;
    setFormatter(arg0: Formatter): void;
    setLevel(arg0: Level): void;
}
import type { InternalLogLevel } from '../../../../io/netty/util/internal/logging/InternalLogLevel.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LogLevel extends Enum<LogLevel> {
    static DEBUG: LogLevel;
    static ERROR: LogLevel;
    static INFO: LogLevel;
    static TRACE: LogLevel;
    static WARN: LogLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LogLevel;
    static values(): LogLevel[];
    private constructor(arg2: InternalLogLevel)
    // private internalLevel: InternalLogLevel;
    toInternalLevel(): InternalLogLevel;
    name(): "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
}
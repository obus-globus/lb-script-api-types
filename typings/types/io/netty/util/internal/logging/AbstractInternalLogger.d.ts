import type { InternalLogLevel } from '../../../../../io/netty/util/internal/logging/InternalLogLevel.d.ts'
import type { InternalLogger } from '../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractInternalLogger extends Object implements InternalLogger, Serializable {
    constructor(arg0: string)
    // private name: string;
    debug(arg0: Throwable): void;
    debug(arg0: string, arg1: Object): void;
    debug(arg0: string, arg1: Object, arg2: Object): void;
    debug(arg0: string, arg1: Throwable): void;
    error(arg0: Throwable): void;
    error(arg0: string, arg1: Object): void;
    error(arg0: string, arg1: Object, arg2: Object): void;
    error(arg0: string, arg1: Throwable): void;
    info(arg0: Throwable): void;
    info(arg0: string, arg1: Object): void;
    info(arg0: string, arg1: Object, arg2: Object): void;
    info(arg0: string, arg1: Throwable): void;
    isDebugEnabled(): boolean;
    isEnabled(arg0: InternalLogLevel): boolean;
    isErrorEnabled(): boolean;
    isInfoEnabled(): boolean;
    isTraceEnabled(): boolean;
    isWarnEnabled(): boolean;
    log(arg0: InternalLogLevel, arg1: string): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object, arg3: Object): void;
    log(arg0: InternalLogLevel, arg1: string, ...arg2: Object[]): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Throwable): void;
    log(arg0: InternalLogLevel, arg1: Throwable): void;
    name(): string;
    readResolve(): Object;
    toString(): string;
    trace(arg0: Throwable): void;
    trace(arg0: string, arg1: Object): void;
    trace(arg0: string, arg1: Object, arg2: Object): void;
    trace(arg0: string, arg1: Throwable): void;
    warn(arg0: Throwable): void;
    warn(arg0: string, arg1: Object): void;
    warn(arg0: string, arg1: Object, arg2: Object): void;
    warn(arg0: string, arg1: Throwable): void;
}
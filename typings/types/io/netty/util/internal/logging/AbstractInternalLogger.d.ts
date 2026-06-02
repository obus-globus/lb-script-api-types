import type { InternalLogLevel } from '../../../../../io/netty/util/internal/logging/InternalLogLevel.d.ts'
import type { InternalLogger } from '../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractInternalLogger extends Object implements InternalLogger, Serializable {
    constructor(arg0: string)
    // private name: string;
    debug(arg0: Throwable): void;
    error(arg0: Throwable): void;
    info(arg0: Throwable): void;
    isEnabled(arg0: InternalLogLevel): boolean;
    log(arg0: InternalLogLevel, arg1: string): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object, arg3: Object): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object[]): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Throwable): void;
    log(arg0: InternalLogLevel, arg1: Throwable): void;
    name(): string;
    readResolve(): Object;
    toString(): string;
    trace(arg0: Throwable): void;
    warn(arg0: Throwable): void;
}
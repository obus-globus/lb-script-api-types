import type { AbstractInternalLogger } from '../../../../../io/netty/util/internal/logging/AbstractInternalLogger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FormattingTuple } from '../../../../../org/slf4j/helpers/FormattingTuple.d.ts'
import type { LocationAwareLogger } from '../../../../../org/slf4j/spi/LocationAwareLogger.d.ts'
export class LocationAwareSlf4JLogger extends AbstractInternalLogger {
    constructor(arg0: LocationAwareLogger)
    // private logger: LocationAwareLogger;
    debug(arg0: string): void;
    debug(arg0: string, arg1: Object): void;
    debug(arg0: string, arg1: Object, arg2: Object): void;
    debug(arg0: string, arg1: Object[]): void;
    debug(arg0: string, arg1: Throwable): void;
    error(arg0: string): void;
    error(arg0: string, arg1: Object): void;
    error(arg0: string, arg1: Object, arg2: Object): void;
    error(arg0: string, arg1: Object[]): void;
    error(arg0: string, arg1: Throwable): void;
    info(arg0: string): void;
    info(arg0: string, arg1: Object): void;
    info(arg0: string, arg1: Object, arg2: Object): void;
    info(arg0: string, arg1: Object[]): void;
    info(arg0: string, arg1: Throwable): void;
    isDebugEnabled(): boolean;
    isErrorEnabled(): boolean;
    isInfoEnabled(): boolean;
    isTraceEnabled(): boolean;
    isWarnEnabled(): boolean;
    // private log(arg0: number, arg1: string): void;
    // private log(arg0: number, arg1: string, arg2: Throwable): void;
    // private log(arg0: number, arg1: FormattingTuple): void;
    trace(arg0: string): void;
    trace(arg0: string, arg1: Object): void;
    trace(arg0: string, arg1: Object, arg2: Object): void;
    trace(arg0: string, arg1: Object[]): void;
    trace(arg0: string, arg1: Throwable): void;
    warn(arg0: string): void;
    warn(arg0: string, arg1: Object): void;
    warn(arg0: string, arg1: Object, arg2: Object): void;
    warn(arg0: string, arg1: Object[]): void;
    warn(arg0: string, arg1: Throwable): void;
}
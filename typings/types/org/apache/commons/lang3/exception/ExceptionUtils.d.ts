import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ExceptionUtils extends Object {
    static asRuntimeException(paramarg0: Throwable): Object | null;
    static forEach(paramarg0: Throwable, paramarg1: (param0: Throwable) => void): void;
    static getCause(paramarg0: Throwable): Throwable;
    static getCause(paramarg0: Throwable, paramarg1: (Object | null)[]): Throwable;
    static getDefaultCauseMethodNames(): (Object | null)[];
    static getMessage(paramarg0: Throwable): string;
    static getRootCause(paramarg0: Throwable): Throwable;
    static getRootCauseMessage(paramarg0: Throwable): string;
    static getRootCauseStackTrace(paramarg0: Throwable): (Object | null)[];
    static getRootCauseStackTraceList(paramarg0: Throwable): string[];
    static getStackFrames(paramarg0: Throwable): (Object | null)[];
    static getStackTrace(paramarg0: Throwable): string;
    static getThrowableCount(paramarg0: Throwable): number;
    static getThrowableList(paramarg0: Throwable): Throwable[];
    static getThrowables(paramarg0: Throwable): (Object | null)[];
    static hasCause(paramarg0: Throwable, paramarg1: Class<Object>): boolean;
    static indexOfThrowable(paramarg0: Throwable, paramarg1: Class<Object>): number;
    static indexOfThrowable(paramarg0: Throwable, paramarg1: Class<Object>, paramarg2: number): number;
    static indexOfType(paramarg0: Throwable, paramarg1: Class<Object>): number;
    static indexOfType(paramarg0: Throwable, paramarg1: Class<Object>, paramarg2: number): number;
    static isChecked(paramarg0: Throwable): boolean;
    static isUnchecked(paramarg0: Throwable): boolean;
    static printRootCauseStackTrace(paramarg0: Throwable): void;
    static printRootCauseStackTrace(paramarg0: Throwable, paramarg1: PrintStream): void;
    static printRootCauseStackTrace(paramarg0: Throwable, paramarg1: PrintWriter): void;
    static removeCommonFrames(paramarg0: string[], paramarg1: string[]): void;
    static rethrow(paramarg0: Throwable): Object | null;
    static stream(paramarg0: Throwable): Stream<Throwable>;
    static throwUnchecked(paramarg0: Object | null): Object | null;
    static throwUnchecked(paramarg0: Object | null): Object | null;
    static throwableOfThrowable(paramarg0: Throwable, paramarg1: Class<Object>): Object | null;
    static throwableOfThrowable(paramarg0: Throwable, paramarg1: Class<Object>, paramarg2: number): Object | null;
    static throwableOfType(paramarg0: Throwable, paramarg1: Class<Object>): Object | null;
    static throwableOfType(paramarg0: Throwable, paramarg1: Class<Object>, paramarg2: number): Object | null;
    static wrapAndThrow(paramarg0: Throwable): Object | null;
    constructor()
}